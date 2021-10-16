package vn.com.ds.erp.products.productdetail;

import android.os.Bundle;

import androidx.fragment.app.Fragment;
import androidx.fragment.app.FragmentActivity;
import androidx.viewpager2.adapter.FragmentStateAdapter;
import androidx.viewpager2.widget.ViewPager2;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.TextView;

import com.google.gson.Gson;

import vn.com.ds.erp.R;
import vn.com.ds.erp.products.productlist.Product;

public class ProductDetailFragment extends Fragment {

    private static final String ARG_PRODUCT = "product";
    private Product mProduct;

    private static int NUM_PAGES = 0;
    private ViewPager2 mViewPager;
    private FragmentStateAdapter mPagerAdapter;

    public ProductDetailFragment() {
        // Required empty public constructor
    }

    public static ProductDetailFragment newInstance(Product product) {
        ProductDetailFragment fragment = new ProductDetailFragment();
        Bundle args = new Bundle();
        Gson serializableProduct = new Gson();
        args.putString(ARG_PRODUCT, serializableProduct.toJson(product));
        fragment.setArguments(args);
        return fragment;
    }

    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        if (getArguments() != null) {
            String productJson = getArguments().getString(ARG_PRODUCT);
            Gson productJSON = new Gson();
            mProduct = productJSON.fromJson(productJson, Product.class);
            NUM_PAGES = mProduct.getImages() != null ? mProduct.getImages().size() : 0;
        }
    }

    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container,
                             Bundle savedInstanceState) {
        View rootView = inflater.inflate(R.layout.fragment_product_detail, container, false);

        TextView productName = rootView.findViewById(R.id.product_name);
        productName.setText(mProduct.getName());

        TextView productPrice = rootView.findViewById(R.id.product_price);
        productPrice.setText(mProduct.getPrice() + " VNĐ");

        mViewPager = rootView.findViewById(R.id.product_detail_images_pager);
        mPagerAdapter = new ImageSlidePagerAdapter(getActivity());
        mViewPager.setAdapter(mPagerAdapter);

        return rootView;
    }

    private class ImageSlidePagerAdapter extends FragmentStateAdapter {
        public ImageSlidePagerAdapter(FragmentActivity fa) {
            super(fa);
        }

        @Override
        public Fragment createFragment(int position) {
            return ProductDetailImageFragment.newInstance(mProduct.getImages().get(position));
        }

        @Override
        public int getItemCount() {
            return NUM_PAGES;
        }
    }
}