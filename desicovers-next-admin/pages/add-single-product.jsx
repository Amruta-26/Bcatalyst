import { Box } from "@mui/material";
import axios from "axios";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";

const AddSingleProduct = (props) => {
    const initialProductData = {
        id: "",
        name: "",
        category: "Select Category",
        model: "",
        modelName: "",
        image: "",
        number1: 0,
        number2: 0,
        number3: 0,
        description: "",
        price: 0,
        productData: "",
        productRating: "",
        productReview: "",
    };
    const [product, setProduct] = useState(initialProductData);
    const [categories, setCategories] = useState([]);
    //add product
    const addProduct = () => {
        const loa = toast.loading("inserting product");

        axios
            .post("https://desicover.herokuapp.com/create-new-product", product)
            .then((res) => {
                console.log(res);
                // toast.success("Product Added Successfully");
                toast.update(loa, {
                    render: "Product added successfully",
                    type: "success",
                    isLoading: false,
                    position: "top-center",
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                });
                clearFields();
                // props.history.push("/");
            })
            .catch((err) => {
                console.log(err);
                toast.error("Product Not Added");
            });
    };
    const clearFields = () => {
        setProduct(initialProductData);
    };
    const fetchAllCategories = () => {
        axios
            .get("https://desicover.herokuapp.com/get-all-categories")
            .then((res) => {
                setCategories(res.data);
            });
    };

    useEffect(() => {
        fetchAllCategories();
        // toast.success("Categories list refreshed");
    }, []);
    return (
        <>
            <div>
                <h1>Add Product</h1>
                <div className="form-group">
                    <label>Product Name</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Product Name"
                        value={product.name}
                        onChange={(e) =>
                            setProduct({
                                ...product,
                                name: e.target.value,
                            })
                        }
                    />
                </div>
                <div className="form-group">
                    <label>Category</label>
                    <select
                        className="form-control"
                        value={product.categoryName}
                        onChange={(e) =>
                            setProduct({
                                ...product,
                                categoryName: e.target.value,
                            })
                        }
                    >
                        <option value="Select Category">Select Category</option>
                        {categories?.data?.map((category) => (
                            <option key={category._id} value={category.name}>
                                {category.categoryName}
                            </option>
                        ))}
                    </select>
                </div>
                {/* the model */}
                {/* {JSON.stringify(categories.data)} */}
                <div className="form-group">
                    <label>Model of the Product</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Model of the Product"
                        value={product.model}
                        onChange={(e) =>
                            setProduct({
                                ...product,
                                model: e.target.value,
                            })
                        }
                    />
                </div>
                {/* the model name */}
                <div className="form-group">
                    <label>Model Name</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Model name of the Product"
                        value={product.modelName}
                        onChange={(e) =>
                            setProduct({
                                ...product,
                                modelName: e.target.value,
                            })
                        }
                    />
                </div>
                <div className="form-group">
                    <label>Image Url of the product</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Image Url "
                        value={product.image}
                        onChange={(e) =>
                            setProduct({
                                ...product,
                                image: e.target.value,
                            })
                        }
                    />
                </div>
                {/*  numbeer 1*/}
                <div className="form-group">
                    <label>Number 1</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Number 1 "
                        value={product.number1}
                        onChange={(e) =>
                            setProduct({
                                ...product,
                                number1: e.target.value,
                            })
                        }
                    />
                </div>
                {/*  numbeer 2*/}
                <div className="form-group">
                    <label>Number 2</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Number 2 "
                        value={product.number2}
                        onChange={(e) =>
                            setProduct({
                                ...product,
                                number2: e.target.value,
                            })
                        }
                    />
                </div>
                {/*  numbeer 3*/}
                <div className="form-group">
                    <label>Number 3</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Number 3 "
                        value={product.number3}
                        onChange={(e) =>
                            setProduct({
                                ...product,
                                number3: e.target.value,
                            })
                        }
                    />
                </div>
                {/* description */}
                <div className="form-group">
                    <label>Description</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Description "
                        value={product.description}
                        onChange={(e) =>
                            setProduct({
                                ...product,
                                description: e.target.value,
                            })
                        }
                    />
                </div>
                {/* price */}
                <div className="form-group">
                    <label>Price</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Price "
                        value={product.price}
                        onChange={(e) =>
                            setProduct({
                                ...product,
                                price: e.target.value,
                            })
                        }
                    />
                </div>
                <Box display="flex">
                    <button
                        className="btn btn-submit btn-primary"
                        onClick={(e) => {
                            e.preventDefault(), addProduct();
                        }}
                    >
                        Add Product
                    </button>
                    <Box width="20" />
                    <button
                        className="btn btn-submit btn-danger"
                        onClick={() => clearFields()}
                    >
                        Clear Fields
                    </button>
                </Box>
                {/* end */}
            </div>
        </>
    );
};
export default AddSingleProduct;
