package vn.com.ds.erp.products.productlist;

import com.google.gson.annotations.SerializedName;

import java.util.List;

public class Product {

    @SerializedName("id")
    private String mId;

    @SerializedName("name")
    private String mName;

    @SerializedName("price")
    private String mPrice;

    @SerializedName("images")
    private List<String> mImages;

    public String getId() {
        return mId;
    }

    public void setId(String mId) {
        this.mId = mId;
    }

    public String getName() {
        return mName;
    }

    public void setName(String mName) {
        this.mName = mName;
    }

    public String getPrice() {
        return mPrice;
    }

    public void setPrice(String mPrice) {
        this.mPrice = mPrice;
    }

    public List<String> getImages() {
        return mImages;
    }

    public void setImages(List<String> mImages) {
        this.mImages = mImages;
    }
}
