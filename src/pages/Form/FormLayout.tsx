import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';
import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { API } from '../../http';
import { addProduct, AddProduct, fetchProducts } from '../../store/dataSlice';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { Status } from '../../types/status';
import { useNavigate } from 'react-router-dom';

interface Category {
  id: string;
  categoryName: string;
}
const FormLayout = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { status } = useAppSelector((state) => state.data);
  const [categories, setCategories] = useState<Category[]>([]);
  const [data, setData] = useState<AddProduct>({
    name: '',
    description: '',
    price: 0,
    stock: 0,
    categoryId: '',
    imageUrl: '',
  });
  const fetchCategories = async () => {
    const response = await API.get('/admin/category');
    if (response.status === 200) {
      setCategories(response.data.data);
    }
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value, files } = e.target as HTMLInputElement;
    setData({
      ...data,
      [name]: name == 'image' ? files?.[0] : value,
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await dispatch(addProduct(data));
    if (status === Status.SUCCESS) {
      navigate('/tables');
      dispatch(fetchProducts());
    } else {
      navigate('/forms/form-layout');
    }
  };

  // useEffect(() => {
  //   if (status === Status.SUCCESS) {
  //     navigate('/tables');
  //   } else {
  //     navigate('/forms/form-layout');
  //   }
  // }, [status, dispatch]);

  useEffect(() => {
    fetchCategories();
  }, []);
  console.log(categories);

  return (
    <>
      <Breadcrumb pageName="Product Form" />

      <div className="grid grid-cols-1 gap-9 sm:grid-cols-1">
        <div className="flex flex-col gap-9">
          {/* <!-- Product Form --> */}
          <div className="w-full rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
              <h3 className="font-bold text-black dark:text-white">
                Add Product:
              </h3>
            </div>
            <form action="#" onSubmit={handleSubmit}>
              <div className="p-6.5">
                <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                  <div className="w-full xl:w-1/2">
                    <label className="mb-2.5 block text-black dark:text-white">
                      Product Name<span className="text-meta-1">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="product name"
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                      onChange={handleChange}
                    />
                  </div>

                  <div className="w-full xl:w-1/2">
                    <label className="mb-2.5 block text-black dark:text-white">
                      Product Price<span className="text-meta-1">*</span>
                    </label>
                    <input
                      type="number"
                      name="price"
                      id="price"
                      placeholder="product Price"
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="mb-4.5">
                  <label className="mb-2.5 block text-black dark:text-white">
                    Product Stock
                  </label>
                  <input
                    type="number"
                    name="stock"
                    id="stock"
                    placeholder="product stock"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-4.5">
                  <label className="mb-2.5 block text-black dark:text-white">
                    Category <span className="text-meta-1">*</span>
                  </label>
                  <select
                    name="name"
                    id="categoryId"
                    onChange={handleChange}
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                  >
                    {categories?.length > 0 &&
                      categories.map((category: any) => {
                        return (
                          <option value={category.id}>{category.name}</option>
                        );
                      })}
                  </select>
                </div>
                {/* <SelectGroupOne /> */}
                <div className="mb-4.5">
                  <label className="mb-2.5 block text-black dark:text-white">
                    Product Description
                  </label>
                  <textarea
                    name="description"
                    id="description"
                    rows={6}
                    placeholder="product description"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    onChange={handleChange}
                  ></textarea>
                </div>

                <div>
                  <label className="mb-2 block text-black dark:text-white">
                    Image
                  </label>
                  <input
                    type="file"
                    name="image"
                    id="image"
                    className="w-full mb-5 rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    placeholder="image"
                    onChange={handleChange}
                  />
                </div>

                <button className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90">
                  Add Product
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default FormLayout;
