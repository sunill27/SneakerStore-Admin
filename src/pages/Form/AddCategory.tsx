// import { Link } from 'react-router-dom';
// import SelectGroupOne from '../../components/Forms/SelectGroup/SelectGroupOne';
import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';
import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { API } from '../../http';
import { addCategory, addProduct, AddProduct } from '../../store/dataSlice';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { Status } from '../../types/status';
import { useNavigate } from 'react-router-dom';

interface Category {
  id: string;
  categoryName: string;
}
const AddCategory = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { status } = useAppSelector((state) => state.data);

  const [data, setData] = useState<{ categoryName: string }>({
    categoryName: '',
  });
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await dispatch(addCategory(data));
    if (status === Status.SUCCESS) {
      navigate('/tables ');
    } else {
      navigate('/forms/add-category');
    }
  };

  return (
    <>
      <Breadcrumb pageName="Category Form" />

      <div className="grid grid-cols-1 gap-9 sm:grid-cols-1">
        <div className="flex flex-col gap-9">
          {/* <!-- Product Form --> */}
          <div className="w-full rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
              <h3 className="font-bold text-black dark:text-white">
                Add Category:
              </h3>
            </div>
            <form action="#" className="w-full" onSubmit={handleSubmit}>
              <div className="p-6.5">
                <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                  <div className="w-full xl:w-1/2">
                    <label className="mb-2.5 block text-black dark:text-white">
                      Category Name<span className="text-meta-1">*</span>
                    </label>
                    <input
                      type="text"
                      name="categoryName"
                      id="categoryName"
                      placeholder="category name"
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <button className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90">
                  Add Category
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="flex flex-col gap-9"></div>
      </div>
    </>
  );
};

export default AddCategory;
