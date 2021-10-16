package vn.com.ds.erp.products.productlist;

import androidx.recyclerview.widget.RecyclerView;

import android.content.Context;
import android.net.Uri;
import android.view.LayoutInflater;
import android.view.ViewGroup;
import android.widget.ImageView;
import android.widget.TextView;

import com.bumptech.glide.Glide;
import com.bumptech.glide.load.engine.DiskCacheStrategy;

import vn.com.ds.erp.databinding.FragmentProductItemBinding;

import java.util.List;

public class ProductRecyclerViewAdapter extends RecyclerView.Adapter<ProductRecyclerViewAdapter.ViewHolder> {

    private final Context mContext;
    private final List<Product> mValues;
    private final ProductRecyclerViewAdapterListener mListener;

    public ProductRecyclerViewAdapter(Context context, List<Product> items, ProductRecyclerViewAdapterListener listener) {
        mContext = context;
        mValues = items;
        mListener = listener;
    }

    @Override
    public ViewHolder onCreateViewHolder(ViewGroup parent, int viewType) {
        return new ViewHolder(FragmentProductItemBinding.inflate(LayoutInflater.from(parent.getContext()), parent, false));
    }

    @Override
    public void onBindViewHolder(final ViewHolder holder, int position) {
        holder.mItem = mValues.get(position);
        holder.mProductId.setText(mValues.get(position).getId());
        Glide.with(mContext)
                .load(Uri.parse(mValues.get(position).getImages().get(0)))
                .diskCacheStrategy( DiskCacheStrategy.ALL )
                .into(holder.mProductImage);
        holder.mProductName.setText(mValues.get(position).getName());
        holder.mProductPrice.setText(mValues.get(position).getPrice() + " VNĐ");

        holder.itemView.setOnClickListener(view -> {
            if (mListener != null) {
                mListener.onItemClick(position);
            }
        });
    }

    @Override
    public int getItemCount() {
        return mValues.size();
    }

    public class ViewHolder extends RecyclerView.ViewHolder {
        public final TextView mProductId;
        public final ImageView mProductImage;
        public final TextView mProductName;
        public final TextView mProductPrice;
        public Product mItem;

        public ViewHolder(FragmentProductItemBinding binding) {
            super(binding.getRoot());
            mProductId = binding.productId;
            mProductImage = binding.productImage;
            mProductName = binding.productName;
            mProductPrice = binding.productPrice;
        }
    }

    public interface ProductRecyclerViewAdapterListener {
        void onItemClick(int position);
    }
}