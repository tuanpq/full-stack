package vn.com.ds.erp.products.productdetail;

import android.os.Bundle;

import androidx.fragment.app.Fragment;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ImageView;

import com.bumptech.glide.Glide;
import com.bumptech.glide.load.engine.DiskCacheStrategy;

import vn.com.ds.erp.R;

public class ProductDetailImageFragment extends Fragment {

    private static final String PRODUCT_DETAIL_IMAGE_URL = "PRODUCT_DETAIL_IMAGE_URL";
    private String mProductDetailImageURL;

    public ProductDetailImageFragment() {
        // Required empty public constructor
    }

    public static ProductDetailImageFragment newInstance(String productDetailImageURL) {
        ProductDetailImageFragment fragment = new ProductDetailImageFragment();
        Bundle args = new Bundle();
        args.putString(PRODUCT_DETAIL_IMAGE_URL, productDetailImageURL);
        fragment.setArguments(args);
        return fragment;
    }

    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        if (getArguments() != null) {
            mProductDetailImageURL = getArguments().getString(PRODUCT_DETAIL_IMAGE_URL);
        }
    }

    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container,
                             Bundle savedInstanceState) {
        View root = inflater.inflate(R.layout.fragment_product_detail_image, container, false);
        ImageView productDetailImageView = root.findViewById(R.id.product_detail_image);
        Glide.with(getContext())
                .load(mProductDetailImageURL)
                .diskCacheStrategy( DiskCacheStrategy.ALL )
                .into(productDetailImageView);
        return root;
    }
}