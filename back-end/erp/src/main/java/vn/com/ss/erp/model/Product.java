package vn.com.ss.erp.model;

import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "products")
public class Product {

    @Id
    private String id;

    private String name;

    private double price;

    private List<String> images;

    public Product() {
        
    }

    public Product(String name, double price, List<String> images) {
        this.name = name;
        this.price = price;
        this.images = images;
    }

    public String getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public List<String> getImages() {
        return images;
    }

    public void setImages(List<String> images) {
        this.images = images;
    }

    @Override
    public String toString() {
        StringBuilder stringBuilder = new StringBuilder();
        stringBuilder.append("{\"id\"=\"" + id + "\", \"name\"=\"" + name + "\", \"price\"=" + price + ", \"images\"=[");
        if (images != null) {
            images.forEach(image -> {
                stringBuilder.append(image + ",");
            });
        }
        stringBuilder.append("]}");
        return stringBuilder.toString();
    }
}
