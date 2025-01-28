import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { useEffect } from 'react';
import { deleteProduct, fetchProducts } from '../../store/dataSlice';

const TableTwo = () => {
  const dispatch = useAppDispatch();
  const { products } = useAppSelector((state) => state.data);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const handleDelete = (id: string) => {
    dispatch(deleteProduct(id));
  };

  return (
    <div className="rounded-md  border-gray-300 bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
      {/* Table Header */}
      <div className="py-6 px-4 md:px-6 xl:px-7.5">
        <h4 className="text-xl text-black font-semibold dark:text-white">
          Top Products
        </h4>
      </div>

      {/* Column Headers */}
      <div className="grid grid-cols-7 border-t border-gray-300 py-4 px-4 dark:border-gray-600 sm:px-6 xl:px-7.5 font-medium">
        <div className="col-span-1 flex items-center text-black dark:text-white">
          <p>Product Image</p>
        </div>
        <div className="col-span-1 flex items-center text-black dark:text-white">
          <p>Product Name</p>
        </div>
        <div className="col-span-1 flex items-center text-black dark:text-white">
          <p>Category</p>
        </div>
        <div className="col-span-1 flex items-center text-black dark:text-white">
          <p>Price</p>
        </div>
        <div className="col-span-1 flex items-center text-black dark:text-white">
          <p>Stocks</p>
        </div>
        <div className="col-span-1 flex items-center text-black dark:text-white">
          <p>Created At</p>
        </div>
        <div className="col-span-1 flex items-center justify-center text-black dark:text-white">
          <p>Actions</p>
        </div>
      </div>

      {/* Table Rows */}
      {products.length > 0 &&
        products.map((product, key) => (
          <div
            key={key}
            className="grid grid-cols-7 border-t border-gray-300 py-4 px-4 dark:border-gray-600 sm:px-6 xl:px-7.5 hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            {/* Product Image */}
            <div className="col-span-1 flex items-center">
              <div className="h-12 w-12 rounded-md overflow-hidden">
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>

            {/* Product Name */}
            <div className="col-span-1 flex items-center">
              <p className="text-sm text-gray-800 dark:text-gray-200">
                {product.name}
              </p>
            </div>

            {/* Category */}
            <div className="col-span-1 flex items-center">
              <p className="text-sm text-gray-800 dark:text-gray-200">
                {product?.Category?.name || 'N/A'}
              </p>
            </div>

            {/* Price */}
            <div className="col-span-1 flex items-center">
              <p className="text-sm text-gray-800 dark:text-gray-200">
                ${product.price}
              </p>
            </div>

            {/* Stocks */}
            <div className="col-span-1 flex items-center">
              <p className="text-sm text-gray-800 dark:text-gray-200">
                {product.stock}
              </p>
            </div>

            {/* Created At */}
            <div className="col-span-1 flex items-center">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {product.createdAt}
              </p>
            </div>

            {/* Actions */}
            <div className="col-span-1 flex items-center justify-center space-x-3">
              {/* View Icon */}
              <button className="hover:text-blue-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4.5C7.30558 4.5 3.67008 8.2835 2.1875 12C3.67008 15.7165 7.30558 19.5 12 19.5C16.6944 19.5 20.3299 15.7165 21.8125 12C20.3299 8.2835 16.6944 4.5 12 4.5ZM12 15C10.067 15 8.5 13.433 8.5 11.5C8.5 9.567 10.067 8 12 8C13.933 8 15.5 9.567 15.5 11.5C15.5 13.433 13.933 15 12 15Z"
                  />
                </svg>
              </button>

              {/* Delete Icon */}
              <button
                onClick={() => handleDelete(product.id!)}
                className="hover:text-red-600"
              >
                <svg
                  className="fill-current"
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.7535 2.47502H11.5879V1.9969C11.5879 1.15315 10.9129 0.478149 10.0691 0.478149H7.90352C7.05977 0.478149 6.38477 1.15315 6.38477 1.9969V2.47502H4.21914C3.40352 2.47502 2.72852 3.15002 2.72852 3.96565V4.8094C2.72852 5.42815 3.09414 5.9344 3.62852 6.1594L4.07852 15.4688C4.13477 16.6219 5.09102 17.5219 6.24414 17.5219H11.7004C12.8535 17.5219 13.8098 16.6219 13.866 15.4688L14.3441 6.13127C14.8785 5.90627 15.2441 5.3719 15.2441 4.78127V3.93752C15.2441 3.15002 14.5691 2.47502 13.7535 2.47502ZM7.67852 1.9969C7.67852 1.85627 7.79102 1.74377 7.93164 1.74377H10.0973C10.2379 1.74377 10.3504 1.85627 10.3504 1.9969V2.47502H7.70664V1.9969H7.67852ZM4.02227 3.96565C4.02227 3.85315 4.10664 3.74065 4.24727 3.74065H13.7535C13.866 3.74065 13.9785 3.82502 13.9785 3.96565V4.8094C13.9785 4.9219 13.8941 5.0344 13.7535 5.0344H4.24727C4.13477 5.0344 4.02227 4.95002 4.02227 4.8094V3.96565ZM11.7285 16.2563H6.27227C5.79414 16.2563 5.40039 15.8906 5.37227 15.3844L4.95039 6.2719H13.0785L12.6566 15.3844C12.6004 15.8625 12.2066 16.2563 11.7285 16.2563Z"
                    fill=""
                  />
                  <path
                    d="M9.00039 9.11255C8.66289 9.11255 8.35352 9.3938 8.35352 9.75942V13.3313C8.35352 13.6688 8.63477 13.9782 9.00039 13.9782C9.33789 13.9782 9.64727 13.6969 9.64727 13.3313V9.75942C9.64727 9.3938 9.33789 9.11255 9.00039 9.11255Z"
                    fill=""
                  />
                  <path
                    d="M11.2502 9.67504C10.8846 9.64692 10.6033 9.90004 10.5752 10.2657L10.4064 12.7407C10.3783 13.0782 10.6314 13.3875 10.9971 13.4157C11.0252 13.4157 11.0252 13.4157 11.0533 13.4157C11.3908 13.4157 11.6721 13.1625 11.6721 12.825L11.8408 10.35C11.8408 9.98442 11.5877 9.70317 11.2502 9.67504Z"
                    fill=""
                  />
                  <path
                    d="M6.72245 9.67504C6.38495 9.70317 6.1037 10.0125 6.13182 10.35L6.3287 12.825C6.35683 13.1625 6.63808 13.4157 6.94745 13.4157C6.97558 13.4157 6.97558 13.4157 7.0037 13.4157C7.3412 13.3875 7.62245 13.0782 7.59433 12.7407L7.39745 10.2657C7.39745 9.90004 7.08808 9.64692 6.72245 9.67504Z"
                    fill=""
                  />
                </svg>
              </button>

              {/* Download Icon */}
              <button className="hover:text-green-600">
                <svg
                  className="fill-current"
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.8754 11.6719C16.5379 11.6719 16.2285 11.9531 16.2285 12.3187V14.8219C16.2285 15.075 16.0316 15.2719 15.7785 15.2719H2.22227C1.96914 15.2719 1.77227 15.075 1.77227 14.8219V12.3187C1.77227 11.9812 1.49102 11.6719 1.12539 11.6719C0.759766 11.6719 0.478516 11.9531 0.478516 12.3187V14.8219C0.478516 15.7781 1.23789 16.5375 2.19414 16.5375H15.7785C16.7348 16.5375 17.4941 15.7781 17.4941 14.8219V12.3187C17.5223 11.9531 17.2129 11.6719 16.8754 11.6719Z"
                    fill=""
                  />
                  <path
                    d="M8.55074 12.3469C8.66324 12.4594 8.83199 12.5156 9.00074 12.5156C9.16949 12.5156 9.31012 12.4594 9.45074 12.3469L13.4726 8.43752C13.7257 8.1844 13.7257 7.79065 13.5007 7.53752C13.2476 7.2844 12.8539 7.2844 12.6007 7.5094L9.64762 10.4063V2.1094C9.64762 1.7719 9.36637 1.46252 9.00074 1.46252C8.66324 1.46252 8.35387 1.74377 8.35387 2.1094V10.4063L5.40074 7.53752C5.14762 7.2844 4.75387 7.31252 4.50074 7.53752C4.24762 7.79065 4.27574 8.1844 4.50074 8.43752L8.55074 12.3469Z"
                    fill=""
                  />
                </svg>
              </button>
            </div>
          </div>
        ))}
    </div>
  );
};

export default TableTwo;
