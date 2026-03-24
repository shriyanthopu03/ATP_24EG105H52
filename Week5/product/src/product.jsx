function Product(props) {

    const {productObj}=props
    return(
        
        <div className="shadow-2xl p-4 bg-gradient-to-r from-mauve-300 to-green-700 text-black">
            <h2 className="text-2xl">{productObj.title}</h2>
            <p className="font-bold">{productObj.price}</p>
            <p className="font-bold">{productObj.description}</p>
        </div>
    )
}
export default Product