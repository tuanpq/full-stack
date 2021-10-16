//
//  ProductDetailViewController.swift
//  erp
//
//  Created by Tuan Pham on 25/09/2021.
//

import UIKit

class ProductDetailViewController: UIViewController {

    @IBOutlet weak var imagesView: UIView!
    @IBOutlet weak var nameLabel: UILabel!
    @IBOutlet weak var priceLabel: UILabel!
    
    var product: Product?
    
    override func viewDidLoad() {
        super.viewDidLoad()
        navigationItem.title = "Product detail"
        
        let productDetailImagesPageViewController = self.storyboard?.instantiateViewController(withIdentifier: "ProductDetailImagesPageViewController") as! ProductDetailImagesPageViewController
        productDetailImagesPageViewController.images = product?.images
        addChild(productDetailImagesPageViewController)
        productDetailImagesPageViewController.view.translatesAutoresizingMaskIntoConstraints = false
        imagesView.addSubview(productDetailImagesPageViewController.view)
        NSLayoutConstraint.activate([
            productDetailImagesPageViewController.view.topAnchor.constraint(equalTo: imagesView.topAnchor, constant: 0.0),
            productDetailImagesPageViewController.view.bottomAnchor.constraint(equalTo: imagesView.bottomAnchor, constant: 0.0),
            productDetailImagesPageViewController.view.leadingAnchor.constraint(equalTo: imagesView.leadingAnchor, constant: 0.0),
            productDetailImagesPageViewController.view.trailingAnchor.constraint(equalTo: imagesView.trailingAnchor, constant: 0.0),
        ])
        productDetailImagesPageViewController.didMove(toParent: self)
        nameLabel.text = product?.name
        priceLabel.text = "\(product?.price ?? 0) VNĐ"
    }
}
