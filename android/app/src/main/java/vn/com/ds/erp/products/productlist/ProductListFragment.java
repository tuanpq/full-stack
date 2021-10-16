package vn.com.ds.erp.products.productlist;

import android.content.Context;
import android.os.Bundle;

import androidx.fragment.app.Fragment;
import androidx.recyclerview.widget.GridLayoutManager;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;

import android.util.Log;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;

import com.androidnetworking.AndroidNetworking;
import com.androidnetworking.error.ANError;
import com.androidnetworking.interfaces.JSONObjectRequestListener;
import com.google.gson.Gson;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.util.ArrayList;

import vn.com.ds.erp.MainActivity;
import vn.com.ds.erp.products.productdetail.ProductDetailFragment;
import vn.com.ds.erp.R;

public class ProductListFragment extends Fragment {

    private static final String ARG_COLUMN_COUNT = "column-count";
    private int mColumnCount = 2;
    private ArrayList<Product> mProductList = new ArrayList<>();
    private ProductRecyclerViewAdapter mProductRecyclerViewAdapter;

    public ProductListFragment() {
    }

    public static ProductListFragment newInstance(int columnCount) {
        ProductListFragment fragment = new ProductListFragment();
        Bundle args = new Bundle();
        args.putInt(ARG_COLUMN_COUNT, columnCount);
        fragment.setArguments(args);
        return fragment;
    }

    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        if (getArguments() != null) {
            mColumnCount = getArguments().getInt(ARG_COLUMN_COUNT);
        }
    }

    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container,
                             Bundle savedInstanceState) {
        View view = inflater.inflate(R.layout.fragment_product_list, container, false);

        // Set the adapter
        if (view instanceof RecyclerView) {
            Context context = view.getContext();
            RecyclerView recyclerView = (RecyclerView) view;
            if (mColumnCount <= 1) {
                recyclerView.setLayoutManager(new LinearLayoutManager(context));
            } else {
                recyclerView.setLayoutManager(new GridLayoutManager(context, mColumnCount));
            }

            mProductRecyclerViewAdapter = new ProductRecyclerViewAdapter(getContext(), mProductList, adapterListener);
            recyclerView.setAdapter(mProductRecyclerViewAdapter);

            AndroidNetworking.get("http://localhost:8080/api/products")
                    .addQueryParameter("page", "0")
                    .addQueryParameter("size", "6")
                    .build()
                    .getAsJSONObject(new JSONObjectRequestListener() {
                        @Override
                        public void onResponse(JSONObject jsonObject) {
                            try {
                                JSONArray products = jsonObject.getJSONArray("products");
                                if (products != null && products.length() > 0) {
                                    Gson gson = new Gson();
                                    mProductList.clear();
                                    for (int i = 0; i < products.length(); i++) {
                                        JSONObject productJson = products.getJSONObject(i);
                                        Product product = gson.fromJson(productJson.toString(), Product.class);
                                        mProductList.add(product);
                                    }

                                    mProductRecyclerViewAdapter.notifyDataSetChanged();
                                }
                            } catch (JSONException e) {
                                e.printStackTrace();
                            }
                        }

                        @Override
                        public void onError(ANError anError) {
                            Log.e("", anError.toString());
                        }
                    });
        }
        return view;
    }

    private final ProductRecyclerViewAdapter.ProductRecyclerViewAdapterListener adapterListener = position -> {
        Product product = mProductList.get(position);
        ProductDetailFragment productFragment = ProductDetailFragment.newInstance(product);
        ((MainActivity)getActivity()).addFragment(productFragment);
    };
}