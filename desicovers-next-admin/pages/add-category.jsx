import { Box } from "@mui/material";
import axios from "axios";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";

const AddCategory = (props) => {
    const initialCategoryData = {
        id: "",
        categoryName: "",
        categoryImageUrl: "",
    };
    const [category, setCategory] = useState(initialCategoryData);
    //add product
    const addCategory = () => {
        toast.loading("inserting category");
        axios
            .post(
                "https://desicover.herokuapp.com/create-new-category",
                category
            )
            .then((res) => {
                console.log(res);
                toast.success("Category Added Successfully");

                clearFields();
                // props.history.push("/");
            })
            .catch((err) => {
                console.log(err);
                toast.error("Category Not Added");
            });
    };
    const clearFields = () => {
        setCategory(initialCategoryData);
    };

    // useEffect(() => {
    //     fetchAllCategories();
    // }, []);
    return (
        <>
            <div>
                <h1>Add Category</h1>
                <div className="form-group">
                    <label>Category Name</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Category Name"
                        value={category.categoryName}
                        onChange={(e) =>
                            setCategory({
                                ...category,
                                categoryName: e.target.value,
                            })
                        }
                    />
                </div>
                <div className="form-group">
                    <label>Category Image Url</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Enter the Image url"
                        value={category.categoryImageUrl}
                        onChange={(e) =>
                            setCategory({
                                ...category,
                                categoryImageUrl: e.target.value,
                            })
                        }
                    />
                </div>

                <Box display="flex">
                    <button
                        className="btn btn-submit btn-primary"
                        onClick={(e) => {
                            e.preventDefault(), addCategory();
                        }}
                    >
                        Add Category
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
export default AddCategory;
