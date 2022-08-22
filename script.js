"use strict"

const account1 = {
  owner: 'Cyril Okwuhe',
  movement: [2000, 4000, -6600, 10000, -1200, 10000, -5000],
  savings: [0],
  image: 'images/cyril.jpg',
  debt: [0],
  pin: 1111,
  movementDate: [
    '2019-11-18T21:31:17.178Z',
    '2019-11-18T21:31:17.178Z',
    '2019-11-18T21:31:17.178Z',
    '2019-11-18T21:31:17.178Z',
    '2022-07-10T21:31:17.178Z',
    '2022-07-14T21:31:17.178Z',
    '2022-07-15T21:31:17.178Z',

  ],
  movementType: [
    'Festus Ishioma transfered to you',
    'Festus Ishioma transfered to you',
    'You transfered to Sessime Favour',
    'Samson Blessing transfered to you',
    'You transfered to Festus Ishioma',
    'Samson Blessing transfered toyou',
    'You transfered to Samson Blessing'
  ]
}

const account2 = {
  owner: 'Samson Blessing',
  movement: [200, 4000, -2000, 11000, -1200, 400, -250],
  savings: [0],
  image: 'images/samson.jpg',
  debt: [0],
  pin: 2222,
  movementDate: [
    '2019-11-18T21:31:17.178Z',
    '2019-11-18T21:31:17.178Z',
    '2020-11-18T21:31:17.178Z',
    '2019-11-18T21:31:17.178Z',
    '2022-07-10T21:31:17.178Z',
    '2022-07-14T21:31:17.178Z',
    '2022-07-15T21:31:17.178Z',

  ],
  movementType: [
    'Festus Ishioma transfered to you',
    'Festus Ishioma transfered to you',
    'You transfered to Sessime Favour',
    'Samson Blessing transfered to you',
    'You transfered to Festus Ishioma',
    'Samson Blessing transfered to you',
    'You transfred to Samson Blessing'
  ]
}

const account3 = {
  owner: 'Festus Ishioma',
  movement: [500, 6000, -1000, 11000, -1200, 1000, -150],
  savings: [0],
  image: 'images/festus.jpg',
  debt: [0],
  pin: 3333,
  movementDate: [
    '2019-11-18T21:31:17.178Z',
    '2019-11-18T21:31:17.178Z',
    '2019-11-18T21:31:17.178Z',
    '2019-11-18T21:31:17.178Z',
    '2022-07-10T21:31:17.178Z',
    '2022-07-14T21:31:17.178Z',
    '2022-07-15T21:31:17.178Z',

  ],
  movementType: [
    'Festus Ishioma transfered to you',
    'Festus Ishioma transfered to you',
    'You transfered to Sessime Favour',
    'Samson Blessing transfered to you',
    'You transfered to Festus Ishioma',
    'Samson Blessing transfered to you',
    'You transfered to Samson Blessing'
  ]
}

const account4 = {
  owner: 'Sessime Favour',
  movement: [100, 4000, -2000, 5000, -1200, 1000, -2500],
  savings: [0],
  image: 'images/festus.jpg',
  debt: [0],
  pin: 4444,
  movementDate: [
    '2019-11-18T21:31:17.178Z',
    '2019-11-18T21:31:17.178Z',
    '2019-11-18T21:31:17.178Z',
    '2019-11-18T21:31:17.178Z',
    '2022-07-10T21:31:17.178Z',
    '2022-07-14T21:31:17.178Z',
    '2022-07-15T21:31:17.178Z',

  ],
  movementType: [
    'Festus Ishioma transfered to you',
    'Festus Ishioma transfered to you',
    'You transfered to Sessime Favour',
    'Samson Blessing transfered to you',
    'You transfered to Festus Ishioma',
    'Samson Blessing transfered to you',
    'You transfered to Samson Blessing'
  ]
}

const accounts = [account1, account2, account3, account4]

//  ======DOMS ========

// =====NAV Doms Selection=====
const labelWelcome = document.querySelector('.welcome')
const formLogin = document.querySelector('#login-form')
const userLogin = document.querySelector('#user')
const userLoginPin = document.querySelector('#pin')
const btnLogin = document.querySelector('#login')
const imageOwner = document.querySelector('#display_img_owner')

//  ====== App container Dom =======
const containerApp = document.querySelector('#app')

//  ===== Current account and balance Dom ======
const labelDate = document.querySelector('#date')
const labelBalance = document.querySelector('.balance-label')

// ====== movements Dom ======
const containerMovement = document.querySelector('#movements')

//  ======= Transaction Doms =======
//   ======Transfer Transaction Doms ==
const btnTransfer = document.querySelector('.transfer_button')
const transferTo = document.querySelector('.transfer_to')
const transferAmount = document.querySelector('.input_amount')
const nameSent = document.querySelector('.name')

//   ======Savings Transaction Doms =====
const inputSavings = document.querySelector('.input_savings')
const btnSavings = document.querySelector('.add_savings_button')

//  =========Loan Transaction Doms =======
const inputLoanAmount = document.querySelector('.input_loan_amount')
const btnLoan = document.querySelector('.submit_loan')

//  Account formats
const labelIncome = document.querySelector('.income')
const labelOutCome = document.querySelector('.outcome')
const labelSavings = document.querySelector('.save')
const labelDebt = document.querySelector('.debt')
const btnsort = document.querySelector('.sorting')

//  ===== COMFIRMATION =========
const comfirmTransaction = document.querySelector('.cormfim')
const addBlur = document.querySelector('.container_blur')
const receiverName = document.querySelector('.receiver_name')

// ======= Spinner ==========
const spinner = document.querySelector('.display_loader')

//  ===== transaction successful ========
const transSucc = document.querySelector('.transaction')
const successfulBtn = document.querySelector('#succesful')

const calcDate = function (date) {
  const locale = navigator.language

  const day = `${date.getDate()}`.padStart(2, 0)
  const month = `${date.getMonth()+ 1}`.padStart(2, 0)
  const year = date.getFullYear()
  const daysPassed = (date1, date2) => Math.round(Math.abs((date1 - date2)) / (1000 * 60 * 60 * 24))
  const days = daysPassed(date, new Date())
  if (days <= 1) {
    return 'Today'
  }
  if (days === 2) {
    return 'Yesterday'
  }
  if (days <= 7) {
    return `${days} days ago`
  } else {
    return Intl.DateTimeFormat(locale).format(date)
  }
  console.log(days);
}

const formatCur = function (value, locale, currency) {
  locale = navigator.language
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency
  }).format(value)
}
//  Display Movement
const displayMovements = function (acc, sort) {
  containerMovement.innerHTML = ' '
  const movs = sort ? acc.movement.slice().sort((a, b) => a - b) : acc.movement
  movs.forEach(function (mov, i) {
    const name = currentAccount.movementType[i]
    const type = mov > 0 ? 'deposit' : 'withrawal'
    // const locale = navigator.language

    // const formatted = new Intl.NumberFormat(locale, {
    //   style: 'currency',
    //   currency: 'ngn'
    // }).format(Math.abs(mov))
    // const nameType = mov > 0 ? `${name} transfered to you` : `You transfered to ${name}`
    const date = new Date(currentAccount.movementDate[i])
    const html = `
        <div class="movement_rows">
        <div class="movement-row">
          <span class="movement_type_${type}">${i + 1} ${type}</span>
          <span class="movement_date">${calcDate(date)}</span>
        </div>

        <span class="name">${currentAccount.movementType[i]}</span>
        <span class="movement_value">${formatCur(mov, 'en-NG', 'NGN')}</span>
      </div>
  `
    containerMovement.insertAdjacentHTML('afterbegin', html)
  })
}


//  ====== Calc Balance =======

const calcBalance = function (acc) {
  const locale = navigator.language
  acc.balance = acc.movement.reduce((cur, mov) => cur + mov)

  // const formatted = new Intl.NumberFormat(locale, {
  //   style: 'currency',
  //   currency: 'NGN'
  // }).format(acc.balance)
  labelBalance.textContent = `${formatCur(acc.balance, 'en-NG', 'NGN')}`
}

//  calc Sumary

const calcSummary = function (acc) {
  const income = acc.movement.filter(mov => mov > 0).reduce((cur, mov) => cur + mov)
  const out = acc.movement.filter(mov => mov < 0).reduce((cur, mov) => cur + mov)
  const savings = acc.savings.filter(sav => sav >= 0).reduce((cur, sav) => cur + sav)
  const debt = acc.debt.filter(debt => debt >= 0).reduce((cur, debt) => cur + debt)

  labelIncome.textContent = `${formatCur(income, 'en-NG', 'NGN')}`
  labelOutCome.textContent = `${formatCur(Math.abs(out), 'en-NG', 'NGN')}`
  labelSavings.textContent = `${formatCur(savings, 'en-NG', 'NGN')}`
  labelDebt.textContent = `${formatCur(debt, 'en-NG', 'NGN')}`

}

const userName = function (acc) {
  acc.forEach(function (acc) {
    acc.userName = acc.owner.toLowerCase().split(' ')[0]
  })
}
userName(accounts)

const updateUI = function () {
  //  Display Movements
  displayMovements(currentAccount)
  //  Display Balance
  calcBalance(currentAccount)
  //  Display Summary
  calcSummary(currentAccount)

}

//  ======  Adding Spinner =====
const addSpiner = function () {
  spinner.classList.remove('hidden')
  addBlur.classList.remove('hidden')


}

//  ======= RemoveSpinner =========
const RemoveSpinner = function () {
  spinner.classList.add('hidden')
  addBlur.classList.add('hidden')

}

let currentAccount;
let timer;
let accountTo;

//  == set timeinterval======
const labelTimeOut = document.querySelector('.count_down')
let time = 30;

const setTimerFunction = function () {
  const tick = setInterval(function () {
    const min = String(Math.trunc(time / 60)).padStart(2, 0)
    const sec = String(time % 60).padStart(2, 0)
    labelTimeOut.textContent = `${min}:${sec}`
    time--

    if (time === 0) {
      clearInterval(tick)
      labelWelcome.textContent = 'Login to Quru Bank'
      containerApp.style.opacity = 0
      imageOwner.setAttribute('src', 'Images/image1.jpg')
    }
  }, 1000);

  return timer = tick
}

btnLogin.addEventListener('click', function (e) {
  e.preventDefault()


  currentAccount = accounts.find(user => user.userName === userLogin.value)
  const welcomeMesage = currentAccount.owner.split(' ')[0]
  // console.log(currentAccount);
  if (currentAccount && currentAccount.pin === Number(userLoginPin.value)) {
    addSpiner()
    setTimeout(function () {
      //=======  remove spinner ======
      RemoveSpinner()
      //  Display image
      imageOwner.setAttribute('src', currentAccount.image)
      //  Display App
      containerApp.style.opacity = 100
      //  Display Welcome Message
      labelWelcome.textContent = `Welcome ${welcomeMesage}`
      // Display image
      // const week = daysOfWeek(date.getDay())
      // const day = `${date.getDate()}`.padStart(2, 0)
      // const month = `${date.getMonth()+ 1}`.padStart(2, 0)
      // const year = date.getFullYear()
      // const hour = `${date.getHours()}`.padStart(2, 0)
      // const minute = `${date.getMinutes()}`.padStart(2, 0)
      const locale = navigator.language
      const date = new Date()
      const options = {
        hour: 'numeric',
        minute: 'numeric',
        day: 'numeric',
        month: 'long',
        year: 'numeric',
        weekday: 'short'
      }
      labelDate.textContent = new Intl.DateTimeFormat(locale, options).format(date)
      if (timer)
        clearInterval(timer)
      timer = setTimerFunction()



      //  Display UI
      updateUI(currentAccount)
    }, 3000)
  }

  userLogin.value = userLoginPin.value = ''
  userLoginPin.blur()
})

const daysOfWeek = function (date) {
  if (date === 1) {
    return 'Mon'
  }
  if (date === 2) {
    return 'Tue'
  }
  if (date === 3) {
    return 'Wed'
  }
  if (date === 4) {
    return 'Thur'
  }
  if (date === 5) {
    return 'Fri'
  }
  if (date === 6) {
    return 'Sat'
  }
  if (date === 7) {
    return 'Sun'
  }
}

//  Implementing Transfer
btnTransfer.addEventListener('click', function (e) {
  e.preventDefault()
  accountTo = accounts.find(acc => acc.userName === transferTo.value)
  const amount = Number(transferAmount.value)
  if (amount > 0 && accountTo && amount <= currentAccount.balance && accountTo !== currentAccount) {
    addSpiner()
    // ====== Name confirmation ========
    setTimeout(function () {
      RemoveSpinner()
      checkNameComfirmation()
    }, 3000)
    clearInterval(timer)
    timer = setTimerFunction()
  }
})


//  ===== ADD COMFRIMATION=======
const checkNameComfirmation = function () {
  comfirmTransaction.classList.remove('hidden')
  addBlur.classList.remove('hidden')
  receiverName.textContent = `${accountTo.owner.toUpperCase()}`

}

//  ===== REMOVE COMFRIMATION=======
const removeComfirm = function () {
  comfirmTransaction.classList.add('hidden')
  addBlur.classList.add('hidden')
}


// ==========  Remove Transaction ========
const removeTranSac = document.querySelector('.cancel')
removeTranSac.addEventListener('click', function () {
  removeComfirm()
  transferTo.value = transferAmount.value = ''
})


// ==========  Confirm Transaction ========
const comfirmTranSac = document.querySelector('.conmfirm_transaction')
comfirmTranSac.addEventListener('click', function () {

  const narration = `You transfered to ${accountTo.owner}`
  const narrationRec = `${currentAccount.owner} transfered to you`
  const amount = Number(transferAmount.value)
  removeComfirm()
  addSpiner()

  setTimeout(function () {
    RemoveSpinner()
    transSucc.classList.remove('hidden')
    addBlur.classList.remove('hidden')
    currentAccount.movement.push(-amount)
    accountTo.movement.push(amount)
    currentAccount.movementDate.push(new Date().toISOString())
    accountTo.movementDate.push(new Date().toISOString())
    currentAccount.movementType.push(narration)
    accountTo.movementType.push(narrationRec)
    updateUI(currentAccount)
    transferTo.value = transferAmount.value = ''
  }, 2000)
})

successfulBtn.addEventListener('click', function () {
  addBlur.classList.add('hidden')
  transSucc.classList.add('hidden')
})

btnSavings.addEventListener('click', function (e) {
  e.preventDefault()

  const amountSave = Number(inputSavings.value)
  const savingsNarration = 'You withdraw to Savings'
  if (amountSave > 0 && amountSave <= currentAccount.balance) {
    addSpiner()

    setTimeout(function () {
      RemoveSpinner()
      currentAccount.savings.push(amountSave)
      currentAccount.movement.push(-amountSave)
      currentAccount.movementDate.push(new Date().toISOString())
      currentAccount.movementType.push(savingsNarration)


      updateUI(currentAccount)
    }, 3000)
  }

  inputSavings.value = ''
})

btnLoan.addEventListener('click', function (e) {
  e.preventDefault()
  const loanAmount = Number(inputLoanAmount.value)
  const narrationLoan = 'You Borrowed '
  if (loanAmount <= currentAccount.balance * currentAccount.balance / currentAccount.balance && loanAmount > 0) {
    addSpiner()

    setTimeout(function () {
      RemoveSpinner()
      currentAccount.movement.push(loanAmount)
      currentAccount.debt.push(loanAmount)
      currentAccount.movementDate.push(new Date().toISOString())
      currentAccount.movementType.push(narrationLoan)
      updateUI(currentAccount)
      console.log(currentAccount);
    }, 3000)
  }
  inputLoanAmount.value = ' '
})

let sorted = false;

btnsort.addEventListener('click', function (e) {
  e.preventDefault()
  displayMovements(currentAccount, !sorted)
  sorted = !sorted

})