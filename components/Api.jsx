import { useState } from "react";

const Api = () => {

	let [products, setProducts] = useState([]);

	fetch("https://dummyjson.com/products")
	.then((res)=>{return res.json()})
	.then((data)=>{return setProducts(data.products)})
	return ( 
		<table>
			<thead>
				<tr>
					<td>1</td>
					<td>2</td>
					<td>3</td>
					<td>4</td>
					<td>5</td>
				</tr>
			</thead>
			<tbody>
				{
					products.map((product)=>{
						return(
							<tr>
								<td>{product.id}</td>
								<td>{product.title}</td>
								<td>{product.brand}</td>
								<td>{product.description}</td>
								<td>{product.id}</td>

							</tr>
						)
					})
				}
			</tbody>
		</table>

	 );
}
 
export default Api;