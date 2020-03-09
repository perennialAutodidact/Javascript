let randomTotal    = document.querySelector('.random-total'),
    tillMessage    = document.querySelector('.till .message'),
    totalInput     = document.querySelector('.till input'),
    currencyLegend = document.querySelector('.currency-legend');

const triggerAddItem = (event) => {
    let column,
        denom;

    if(event.target.tagName == 'DIV'){
        if(event.target.dataset.denom){
            denom = event.target.dataset.denom;
        } else {
            denom = event.target.parentElement.dataset.denom;
        }
        column = document.querySelector(`.payment #col-${denom}`)
        
        paymentGraph.addItem(column);
    }
}

const triggerRemoveItem = (event) => {
    let item = event.target,
        denom = event.target.parentElement.dataset.denom,
        label = document.querySelector(`#quantity-${denom}`);

    if(item.classList.contains('graph-item')){
        item.removeEventListener('click', triggerRemoveItem)
        item.style.opacity = 0;
        item.style.transform = 'scale(0)';  

        
        setTimeout(() => {
            item.remove();
            label.innerText--;
        },100)
    }
    
}

currencyLegend.addEventListener('click', triggerAddItem);
// paymentGraph.addEventListener('click', triggerRemoveItem);
class Graph {
    constructor(container, name) {
        this.container = container;
        this.name = name;
        this.columns = this.container.querySelectorAll('.graph .graph-col')
    }

    addItem(column){
        let item  = document.createElement('div'),
            denom = column.dataset.denom,
            coins = ['quarter', 'dime', 'nickel', 'penny'],
            label = document.querySelector(`#quantity-${denom}`)
        
        item.classList.add('graph-item', denom);
        if(coins.includes(denom)){
            item.classList.add('graph-coin', `graph-${denom}`)
        }

        setTimeout(() => {
            item.style.opacity = 1;
            item.style.transform = 'scale(1)';
        }, 10)
        
        item.dataset.value = column.dataset.value;
        column.append(item);

        label.innerText++;
        
    }

}

let columnFifty = document.querySelector('.payment #col-fifty'),
    columnQuarter = document.querySelector('.payment #col-quarter'),
    columnDime = document.querySelector('.payment #col-dime'),
    columnNickel = document.querySelector('.payment #col-nickel'),
    columnPenny = document.querySelector('.payment #col-penny');

let paymentGraph = new Graph(document.querySelector('.payment'), 'payment');

paymentGraph.container.addEventListener('click', triggerRemoveItem);

// Takes in string from till input and
// returns total in proper format => $ xxx,xxx,xxx.xx
const updateTotal = (total, char) => {

    let isDigit = new RegExp(/([0-9])/),
        nonDigit = new RegExp(/([\D])/g),
        leadingZeros = new RegExp(/(^0+)/),
        preTemp, postDecimal, 
        preDecimal = [],
        count;

    // Remove leading zeros and non-digit characters,
    // convert to array
    total = total.replace(nonDigit, '')
    total = total.replace(leadingZeros, '')
    total = total.split('')

    if(total.length == 0){
        total = '0.00';

    } else if(total.length < 2 && total.length > 0){
        total.unshift('0','.','0');
        total = total.join('');

    } else if (total.length == 2){
        
        total.unshift('0', '.')
        total = total.join('');

    } else {
        preTemp  = total.splice(0, total.length - 2);
        postDecimal = total.splice(total.length - 2, total.length)

        count = 0
        for(let i = preTemp.length - 1 ; i >= 0; i--){
            
            if(count % 3 == 0 && count != 0){
                preDecimal.unshift(',')
            }
            preDecimal.unshift(preTemp[i])

            count++;
        }

        total = preDecimal.join('') + '.' + postDecimal.join('')
    }

    return `$ ${total}`
} 

totalInput.addEventListener('focusout', () => {
    if(totalInput.value.length < 3){
        totalInput.value = '$ 0.00';
    }
})

totalInput.addEventListener('input', (e) => {
    let newValue,
        digit = new RegExp(/([0-9])/),
        newChar;

    if(e.data){
        newChar = e.data;
    } else {
        newChar = '0';
    }
    
    if(digit.test(newChar) && newChar != '$'){
        newValue = updateTotal(totalInput.value, newChar);
    } else {
        if(newChar == '$' || '.'){
            newValue = totalInput.value.replace(newChar, '')
            newValue = totalInput.value.split('')
            newValue.pop()
            newValue = newValue.join('')
        }
    }
    
    totalInput.value = `${newValue}`;
});

// collects number of each
// denomination of money that 
// the user has selected for payment
const compilePayment = () => {

}

// Calculate change due
// returns object with quantities 
// for each denomination
// '$ 24.56
const makeChange = (amountDue, amountPaid) => {

}