let network;
let connection;
let accounts;
let provider;
let thisURL = window.location.origin.toString();

let Accounttype = "0";
let contractAddress = "0x68590a47578E5060a29fd99654f4556dBfa05D10";
let abi = [
  {
    inputs: [
      {
        internalType: "address payable",
        name: "routerAddress",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "ethReceived",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "nextAvailableClaimDate",
        type: "uint256",
      },
    ],
    name: "ClaimBNBSuccessfully",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "tokensSwapped",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "ethReceived",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "tokensIntoLiqudity",
        type: "uint256",
      },
    ],
    name: "SwapAndLiquify",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: false, internalType: "bool", name: "enabled", type: "bool" },
    ],
    name: "SwapAndLiquifyEnabledUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      { indexed: true, internalType: "address", name: "to", type: "address" },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [],
    name: "_liquidityFee",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "_maxTxAmount",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "_taxFee",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "activateContract",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "owner", type: "address" },
      { internalType: "address", name: "spender", type: "address" },
    ],
    name: "allowance",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "spender", type: "address" },
      { internalType: "uint256", name: "amount", type: "uint256" },
    ],
    name: "approve",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "account", type: "address" }],
    name: "balanceOf",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "ofAddress", type: "address" }],
    name: "calculateBNBReward",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "claimBNBReward",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [{ internalType: "uint8", name: "", type: "uint8" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "spender", type: "address" },
      { internalType: "uint256", name: "subtractedValue", type: "uint256" },
    ],
    name: "decreaseAllowance",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "tAmount", type: "uint256" }],
    name: "deliver",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "disableEasyRewardFrom",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "disruptiveCoverageFee",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "recipient", type: "address" },
      { internalType: "uint256", name: "amount", type: "uint256" },
    ],
    name: "disruptiveTransfer",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "disruptiveTransferEnabledFrom",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "easyRewardCycleBlock",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "account", type: "address" }],
    name: "excludeFromFee",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "account", type: "address" }],
    name: "excludeFromReward",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "geUnlockTime",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getRewardCycleBlock",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "account", type: "address" }],
    name: "includeInFee",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "account", type: "address" }],
    name: "includeInReward",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "spender", type: "address" },
      { internalType: "uint256", name: "addedValue", type: "uint256" },
    ],
    name: "increaseAllowance",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "account", type: "address" }],
    name: "isExcludedFromFee",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "account", type: "address" }],
    name: "isExcludedFromReward",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "time", type: "uint256" }],
    name: "lock",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [{ internalType: "string", name: "", type: "string" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "", type: "address" }],
    name: "nextAvailableClaimDate",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "pancakePair",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "pancakeRouter",
    outputs: [
      {
        internalType: "contract IPancakeRouter02",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "tAmount", type: "uint256" },
      { internalType: "bool", name: "deductTransferFee", type: "bool" },
    ],
    name: "reflectionFromToken",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "rewardCycleBlock",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "rewardThreshold",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "_address", type: "address" },
      { internalType: "bool", name: "value", type: "bool" },
    ],
    name: "setExcludeFromMaxTx",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "liquidityFee", type: "uint256" },
    ],
    name: "setLiquidityFeePercent",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "maxTxPercent", type: "uint256" },
    ],
    name: "setMaxTxPercent",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "bool", name: "_enabled", type: "bool" }],
    name: "setSwapAndLiquifyEnabled",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "taxFee", type: "uint256" }],
    name: "setTaxFeePercent",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "swapAndLiquifyEnabled",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [{ internalType: "string", name: "", type: "string" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "threshHoldTopUpRate",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "rAmount", type: "uint256" }],
    name: "tokenFromReflection",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalFees",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "recipient", type: "address" },
      { internalType: "uint256", name: "amount", type: "uint256" },
    ],
    name: "transfer",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "sender", type: "address" },
      { internalType: "address", name: "recipient", type: "address" },
      { internalType: "uint256", name: "amount", type: "uint256" },
    ],
    name: "transferFrom",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "newOwner", type: "address" }],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "unlock",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "winningDoubleRewardPercentage",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  { stateMutability: "payable", type: "receive" },
];
let mainContract = undefined;

let zeroAddress = "0xA5a90C315d490C5b952EF9D613d9d9fd8802284d"; //we need to change this with real zeroAddress
let bscScan = "https://bscscan.com/address/" + contractAddress;

let user = {
  ref: undefined,
  address: "",
};

$(function () {
  createCookie();
  beginLogins();
});

let attempts = 0;
async function beginLogins() {
  window.ethereum.enable();
  await userLoginAttempt();
  setTimeout(() => {
    if (user.address == undefined && attempts < 3) {
      setTimeout(() => {
        if (user.address == undefined && attempts < 3) {
          attempts++;
          beginLogins();
        }
      }, 1000);
    }

  }, 1000);
}

async function userLoginAttempt() {
  let isConnected = false;
  await window.addEventListener("load", async function () {
    console.log(window.ethereum.selectedAddress, "window . ethemerrm before");
    if (window.ethereum) {
      window.web3 = new Web3(ethereum);
      provider = window.web3;
      isConnected = true;
    } else if (window.web3) {
      window.web3 = new Web3(web3.currentProvider);
      console.log("3 else if is working")
    } 

    try {
      await ethereum.enable();
      await web3.eth.getAccounts().then(function (result) {
        user.address = result[0];
        initContract();
      });
    } catch (error) {
      console.error(error);
    }
  });
}

async function initContract() {
  try {
    await (mainContract = new web3.eth.Contract(abi, contractAddress));
    if (mainContract != undefined) {
        
      startUp();
    } else {
      setTimeout(() => {
        initContract();
      }, 2000);
    }
  } catch (e) {
    setTimeout(() => {
      initContract();
    }, 2000);
  }
  setInterval(function () {
    startUp();
  }, 5000);
}

async function startUp() {

  if (window.ethereum.selectedAddress != null) {
    let p2 = user.address.slice(42 - 5);

    $("#walletConnect")[0].innerHTML = `${user.address.slice(0, 4)}...${p2}`;
    $("#shortAddress")[0].innerHTML = `${user.address.slice(0, 4)}...${p2}`;
    $("#shortAccount")[0].innerHTML = `${user.address.slice(0, 4)}...${p2}`;
    $("#showAccountBtn")[0].innerHTML = `${user.address.slice(0, 4)}...${p2}`;

    document.querySelector("#prepare").style.display = "none";
    document.querySelector("#connected").style.display = "block";

    //Bscscan link href
    const link = document.getElementById("bscscan-link");
    link.href = `https://bscscan.com/address/${user.address}`;

    // clipboard input value
    const copyLink = document.getElementById("addressInput");
    copyLink.value = user.address;
    if (user.address != undefined) {
      connection = "Metamask is unlocked";
      $("#metamaskConnection").text(connection);
      const chainId = await web3.eth.getChainId();
      // Display Network Error
      if (chainId != 56 && chainId != 97) {
        document.querySelector("#prepare").style.display = "none";
        document.querySelector("#connected").style.display = "none";
        document.querySelector("#networkError").style.display = "block";
      } else {
        document.querySelector("#networkError").style.display = "none";
        document.querySelector("#connected").style.display = "block";
      }
    } else {
      connection = "Metamask is locked";
      $("#metamaskConnection").text(connection);
    }
  } else {
    beginLogins();
  }
}

function isLocked() {
  window.web3.eth.getAccounts(function (err, accounts) {
    if (err != null) {
      console.log(err);
      $("#lock").text(err);
    } else if (accounts.length === 0) {
      console.log("MetaMask is locked");
      $("#lock").text("MetaMask is locked.");
    } else {
      console.log("MetaMask is unlocked");
      $("#lock").text("MetaMask is unlocked.");
    }
  });
}

//COOKIE CREATION

function createCookie() {
  if (window.location.href.indexOf("ref=") < 0) {
    user.ref = zeroAddress;
  } else {
    const index = window.location.href.indexOf("ref=") + 4;
    let ref = window.location.href.slice(index, index + 42);
    if (window.localStorage) {
      localStorage.setItem("referrerAddress", ref);
    }
    let date = new Date();
    date.setTime(date.getTime() + 10000 * 24 * 60 * 60 * 1000);
    document.cookie = "ref=" + ref + "; expires=" + date.toGMTString();
  }
  accessCookie("ref");
}

// ACCESS COOKIE
function accessCookie(cookieName) {
  let name = cookieName + "=";
  let accessedCookie;
  let allCookieArray = document.cookie.split(";");
  for (let i = 0; i < allCookieArray.length; i++) {
    let temp = allCookieArray[i].trim();
    if (temp.indexOf(name) == 0) {
      accessedCookie = temp.substring(name.length, temp.length);
      if (validateErcAddress(accessedCookie)) user.ref = accessedCookie;
      //   console.log("Referrer: " + user.ref)
    }
  }
}

function validateErcAddress(address) {
  if (typeof address !== "string") return false;

  if (address[0] === "0" && address[1] === "x" && address.length == 42)
    return true;

  return false;
}

// Logout
function logOut() {
  isConnected = false;
}
