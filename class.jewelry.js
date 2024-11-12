class Jewelry{
    static productCount = 0;
    constructor(pname, price, description, image, type){
        this._pname = pname;
        this._price = price;
        this._description = description;
        this._image = image;
        this._type = type;
        Jewelry.productCount++;
    }

    getters(attr) {
        return this[`_${attr}`];
    }

    setters(attr, value){
        return this[`_${attr}`] = value;
    }



}

module.exports = Jewelry;