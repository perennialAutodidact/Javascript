let randomTotal    = document.querySelector('.random-total'),
    tillMessage    = document.querySelector('.till .message'),
    totalInput     = document.querySelector('.till input'),
    currencyLegend = document.querySelector('.currency-legend'),
    submit         = document.querySelector('#submit');

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

const makeChange = () => {
    let totalDue     = totalInput.value,
        paymentGraph = document.querySelector('.payment'),
        graphItems   = paymentGraph.querySelectorAll('.graph-item'),
        denoms       = [100.0, 50.0, 20.0, 10.0, 5.0, 1.0, 0.25, 0.1, 0.05, 0.01],
        totalPaid    = 0.0,
        changeDue    = 0.0,
        graphItem,
        denom,
        change = {},
        count = 0;

        totalDue = totalDue.replace("$ ", '');
        totalDue = parseFloat(totalDue.replace(",", ''));
        
        for(i = 0; i < graphItems.length; i++){
            graphItem = graphItems[i];
            
            totalPaid += parseFloat(graphItem.dataset.value);
        }
        
        changeDue = parseFloat(totalPaid - totalDue);
        
        console.log(`totalDue: ${totalDue}`);
        console.log(`totalPaid: ${totalPaid}`);
        console.log(`change: ${changeDue}`);

        while(count < denoms.length){
            denom = denoms[count];
            change[denom] = 0;

            // console.log(`denom: ${denoms}`);
            
            // console.log(`changeDue-denom: ${denom-changeDue}`);
            while(changeDue - denom >= 0){
                changeDue = Math.round(parseFloat(changeDue - denom) * 100) / 100;
                change[denom] += 1;
            }
            count++;
        }

        console.log(change);
        
}

let paymentGraph = new Graph(document.querySelector('.payment'), 'payment');
let changeGraph  = new Graph(document.querySelector('.change-due'), 'change');

paymentGraph.container.addEventListener('click', triggerRemoveItem);

submit.addEventListener('click', makeChange);