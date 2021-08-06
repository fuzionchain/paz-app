"use strict";

const Web3Modal = window.Web3Modal.default;
const WalletConnectProvider = window.WalletConnectProvider.default;
const Fortmatic = window.Fortmatic;
const evmChains = window.evmChains;

let web3Modal;
let provider;
let selectedAccount;

/**
 * Setup the orchestra
 */
function init() {
  // Check that the web page is run in a secure context,
  // as otherwise MetaMask won't be available
  if (location.protocol !== "https:") {
    document.querySelector("#btn-connect").setAttribute("disabled", "disabled");
    return;
  }

  console.log("data within the init function");
  // Tell Web3modal what providers we have available.
  // Built-in web browser provider (only one can exist as a time)
  // like MetaMask, Brave or Opera is added automatically by Web3modal
  const providerOptions = {
    walletconnect: {
      package: WalletConnectProvider,
      options: {
        // test key - don't copy as your mileage may vary
        infuraId: "8043bb2cf99347b1bfadfb233c5325c0",
      },
    },

    fortmatic: {
      package: Fortmatic,
      options: {
        // TESTNET api key
        key: "pk_test_391E26A3B43A3350",
      },
    },
  };

  web3Modal = new Web3Modal({
    cacheProvider: false, // optional
    providerOptions, // required
    disableInjectedProvider: false, // optional. For MetaMask / Brave / Opera.
  });
}

/**
 * Kick in the UI action after Web3modal dialog has chosen a provider
 */
async function fetchAccountData() {
  // Get a Web3 instance for the wallet
  const web3 = new Web3(provider);
  // Get connected chain id from Ethereum node
  const chainId = await web3.eth.getChainId();
  // Load chain information over an HTTP API
  const chainData = evmChains.getChain(chainId);
  document.querySelector("#network-name").textContent = chainData.name;
  // Get list of accounts of the connected wallet
  const accounts = await web3.eth.getAccounts();

  // MetaMask does not give you all accounts, only the selected account

  selectedAccount = accounts[0];

  document.querySelector("#selected-account").textContent = selectedAccount;

  // Short account address
  const firstPart = selectedAccount.slice(0, 6);
  const secondPart = selectedAccount.slice(
    selectedAccount.length - 4,
    selectedAccount.length
  );
  const shortAccount = `${firstPart}...${secondPart}`;
  document.querySelector("#shortAddress").textContent = shortAccount;
  document.querySelector("#shortAddress-2").textContent = shortAccount;
  document.querySelector("#shortAccount").textContent = shortAccount;

  //Bscscan link href
  const link = document.getElementById("bscscan-link");
  link.href = `https://bscscan.com/address/${selectedAccount}`;

  // clipboard input value
  const copyLink = document.getElementById("addressInput");
  copyLink.value = selectedAccount;

  // Get a handl
  const template = document.querySelector("#template-balance");
  const accountContainer = document.querySelector("#accounts");

  // Purge UI elements any previously loaded accounts
  accountContainer.innerHTML = "";

  // Go through all accounts and get their ETH balance
  const rowResolvers = accounts.map(async (address) => {
    const balance = await web3.eth.getBalance(address);
    // ethBalance is a BigNumber instance
    // https://github.com/indutny/bn.js/
    const ethBalance = web3.utils.fromWei(balance, "ether");
    const humanFriendlyBalance = parseFloat(ethBalance).toFixed(4);
    // Fill in the templated row and put in the document
    const clone = template.content.cloneNode(true);
    clone.querySelector(".address").textContent = address;
    clone.querySelector(".balance").textContent = humanFriendlyBalance;
    accountContainer.appendChild(clone);
  });

  // Because rendering account does its own RPC commucation
  // with Ethereum node, we do not want to display any results
  // until data for all accounts is loaded
  await Promise.all(rowResolvers);

  // Display fully loaded UI for wallet data
  document.querySelector("#prepare").style.display = "none";
  document.querySelector("#connected").style.display = "block";
  // Display Network Error
  if (chainId != 56 && chainId != 97) {
    document.querySelector("#prepare").style.display = "none";
    document.querySelector("#connected").style.display = "none";
    document.querySelector("#networkError").style.display = "block";
  } else {
    document.querySelector("#networkError").style.display = "none";
  }
}

/**
 * Fetch account data for UI when
 * - User switches accounts in wallet
 * - User switches networks in wallet
 * - User connects wallet initially
 */
async function refreshAccountData() {
  const userAccountData = JSON.parse(sessionStorage.getItem("userData"));

  if (userAccountData != null) {
    console.log(userAccountData, "IF 2 condition is working");
    // If any current data is displayed when
    // the user is switching acounts in the wallet
    // immediate hide this data
    document.querySelector("#connected").style.display = "none";
    document.querySelector("#prepare").style.display = "block";

    // Disable button while UI is loading.
    // fetchAccountData() will take a while as it communicates
    // with Ethereum node via JSON-RPC and loads chain data
    // over an API call.

    document.querySelector("#btn-connect").setAttribute("disabled", "disabled");
    await fetchAccountData(provider);
    document.querySelector("#btn-connect").removeAttribute("disabled");
  } else {
    await fetchAccountData(userAccountData);
    console.log(userAccountData, "ELSE 2 condition is working");
    document.querySelector("#connected").style.display = "block";
    document.querySelector("#prepare").style.display = "none";
  }
}

/**
 * Connect wallet button pressed.
 */
async function onConnect() {
  try {
    provider = await web3Modal.connect();
    console.log(provider, "provider data on connect");
    const object = provider;
    function simpleStringify (object){
        var simpleObject = {};
        for (var prop in object ){
            if (!object.hasOwnProperty(prop)){
                continue;
            }
            if (typeof(object[prop]) == 'object'){
                continue;
            }
            if (typeof(object[prop]) == 'function'){
                continue;
            }
            simpleObject[prop] = object[prop];
        }
        return JSON.stringify(simpleObject); // returns cleaned up JSON
    };
    sessionStorage.setItem("userData", object);
    const objData = sessionStorage.getItem("userData");
    console.log(JSON.parse(objData), "parsed JSON data");
  } catch (e) {
    console.log("Could not get a wallet connection", e);
    return;
  }

  // Subscribe to accounts change
  provider.on("accountsChanged", () => {
    fetchAccountData();
  });

  // Subscribe to chainId change
  provider.on("chainChanged", () => {
    fetchAccountData();
  });

  // Subscribe to networkId change
  provider.on("networkChanged", () => {
    fetchAccountData();
  });

  await refreshAccountData();
}

/**
 * Disconnect wallet button pressed.
 */
async function onDisconnect() {
  if (provider.close) {
    await provider.close();

    // If the cached provider is not cleared,
    // WalletConnect will default to the existing session
    // and does not allow to re-scan the QR code with a new wallet.
    // Depending on your use case you may want or want not his behavir.
    await web3Modal.clearCachedProvider();
    provider = null;
    sessionStorage.clear();
  }

  selectedAccount = null;
  sessionStorage.clear();
  // Set the UI back to the initial state
  document.querySelector("#prepare").style.display = "block";
  document.querySelector("#connected").style.display = "none";
}

/**
 * Main entry point.
 */

window.addEventListener("load", async () => {
  const userSessionData = JSON.parse(sessionStorage.getItem("userData"));

  if (userSessionData == null) {
    console.log("IF 1 condition");
    init();
    document.querySelector("#btn-connect").addEventListener("click", onConnect);
    document.querySelector("#btn-disconnect").addEventListener("click", onDisconnect);
  } 
  else {
    console.log("ELSE 1 condition is working");
    init();
    provider = userSessionData;
    await refreshAccountData();
    console.log(userSessionData, "hi OBJECT");
    document.querySelector("#btn-connect").addEventListener("click", onConnect);
    document.querySelector("#btn-disconnect").addEventListener("click", onDisconnect);
    document.querySelector("#prepare").style.display = "none";
    document.querySelector("#connected").style.display = "block";
  }
});
