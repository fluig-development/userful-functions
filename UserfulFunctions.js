function SeekTo(value){
	this.value = new String(value);

	this.quantityOfTimes = (search) => {
		search = new String(search)

		let value = this.value
		let controller = true
		let quantity = 0
		let result = 0

		const valueLength = value.length
		const searchLength = search.length
		
		while (controller) {
			result = value.indexOf(search)
			if(result > -1){
				value = value.substring((result + searchLength), valueLength)
				quantity++
			}else{
				controller = false
			}
		}

		return quantity
	}
}

function ConvertTo(value){
	this.value = value;

    this.currencyToNumber = () => {
        value = new String(this.value)
        value = value.replace(/[^0-9.,]/g, "")
		
		const seek = new SeekTo(value);
		let result = seek.quantityOfTimes(",");
		
		if(result > 0){
			result = seek.quantityOfTimes(".");
			if(result > 0){
				value = value.replace(/\./g, "");
			}
			value = value.replace(/\,/g, ".");
		}
		
		value = parseFloat(value);
		value = isNaN(value) ? 0 : value;
		
        return value;
    }
	
	this.numberToCurrency = (locate = "pt-BR", currency = "BRL", minimumFractionDigits = 2,  maximumFractionDigits = 2) => {
        let value = this.value;
		if(typeof value != "number"){
			throw new DOMException("The informed value is not a number");
		}

        const options = { 
							style: 'currency', 
                            currency: currency, 
                            minimumFractionDigits: minimumFractionDigits,
                            maximumFractionDigits: maximumFractionDigits
                          }

        
		return value.toLocaleString(locate, options)
	}
}