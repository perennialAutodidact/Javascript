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
        console.log(`column: `, column);
        
        paymentGraph.addItem(column);
    }
}

currencyLegend.addEventListener('click', triggerAddItem, false);

class Graph {
    constructor(container, name) {
        this.container = container;
        this.name = name;
        this.columns = this.container.querySelectorAll('.graph .graph-col')
    }

    addItem(column){
        console.log(`column: ${column}`);
        
        let item  = document.createElement('div'),
            denom = column.dataset.denom,
            coins = ['quarter', 'dime', 'nickel', 'penny'];
        
            item.classList.add('item-hidden');
        item.classList.add('graph-item', denom);
        if(coins.includes(denom)){
            item.classList.add('graph-coin', `graph-${denom}`)
        }
        item.classList.remove('item-hidden');
        
        item.dataset.value = column.dataset.value;
        column.prepend(item);
    }

}

let columnFifty = document.querySelector('.payment #col-fifty'),
    columnQuarter = document.querySelector('.payment #col-quarter'),
    columnDime = document.querySelector('.payment #col-dime'),
    columnNickel = document.querySelector('.payment #col-nickel'),
    columnPenny = document.querySelector('.payment #col-penny');

let paymentGraph = new Graph(document.querySelector('.payment'), 'payment');

paymentGraph.addItem(columnFifty)
paymentGraph.addItem(columnFifty)
paymentGraph.addItem(columnFifty)
paymentGraph.addItem(columnFifty)
paymentGraph.addItem(columnFifty)
paymentGraph.addItem(columnQuarter)
paymentGraph.addItem(columnQuarter)
paymentGraph.addItem(columnQuarter)
paymentGraph.addItem(columnDime)
paymentGraph.addItem(columnDime)
paymentGraph.addItem(columnNickel)
paymentGraph.addItem(columnNickel)
paymentGraph.addItem(columnPenny)

console.log(paymentGraph.columns);

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