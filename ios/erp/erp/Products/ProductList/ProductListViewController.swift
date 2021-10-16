//
//  ProductListViewController.swift
//  erp
//
//  Created by Tuan Pham on 25/09/2021.
//

import UIKit
import Alamofire

class ProductListViewController: UIViewController {

    @IBOutlet weak var collectionView: UICollectionView!
    @IBOutlet weak var collectionViewFlowLayout: UICollectionViewFlowLayout!
    private var refreshControl: UIRefreshControl!
    
    private let reuseIdentifier = "ProductCollectionViewCell"
    private let sectionInsets = UIEdgeInsets(top: 24.0, left: 24.0, bottom: 24.0, right: 24.0)
    private let itemsPerRow: CGFloat = 2
    
    private var productList: ProductList?
    private let ITEMS_PER_PAGE: Int = 6
    private var currentPage: Int = 0
    
    override func viewDidLoad() {
        super.viewDidLoad()
        navigationItem.title = "All products"
        
        refreshControl = UIRefreshControl()
        collectionView!.alwaysBounceVertical = true
        collectionView!.refreshControl = refreshControl
        collectionView.delegate = self
        collectionView.dataSource = self
        
        let fetchURL = "http://localhost:8080/api/products?page=\(currentPage)&size=\(ITEMS_PER_PAGE)"
        AF.request(fetchURL).responseDecodable(of: ProductList.self) { (response) in
            self.productList = response.value
            self.collectionView.reloadData()
        }
    }

}

extension ProductListViewController : UICollectionViewDelegate {

    func collectionView(_ collectionView: UICollectionView, didSelectItemAt indexPath: IndexPath) {
        let productDetailViewController = self.storyboard?.instantiateViewController(withIdentifier: "ProductDetailViewController") as! ProductDetailViewController
        productDetailViewController.product = productList?.products?[indexPath.row]
        self.navigationController?.pushViewController(productDetailViewController, animated: true)
    }
    
}

extension ProductListViewController : UICollectionViewDataSource {
    
    func numberOfSectionsInCollectionView(collectionView: UICollectionView) -> Int {
        return 1
    }
    
    func collectionView(_ collectionView: UICollectionView, numberOfItemsInSection section: Int) -> Int {
        return productList?.products?.count ?? 0
    }
    
    func collectionView(_ collectionView: UICollectionView, cellForItemAt indexPath: IndexPath) -> UICollectionViewCell {
        let cell = collectionView.dequeueReusableCell(withReuseIdentifier: reuseIdentifier, for: indexPath) as! ProductCollectionViewCell
            cell.setContent(product: productList!.products![indexPath.row])
        return cell
    }
}

extension ProductListViewController: UICollectionViewDelegateFlowLayout {
  
    func collectionView(_ collectionView: UICollectionView, layout collectionViewLayout: UICollectionViewLayout, sizeForItemAt indexPath: IndexPath) -> CGSize {
        let paddingSpace = sectionInsets.left * (itemsPerRow + 1)
        let availableWidth = view.frame.width - paddingSpace
        let widthPerItem = availableWidth / itemsPerRow
        let heightPerItem = widthPerItem + 120 //48 + 12 + 48 + 12
        return CGSize(width: widthPerItem, height: heightPerItem)
    }
  
    func collectionView(_ collectionView: UICollectionView, layout collectionViewLayout: UICollectionViewLayout, insetForSectionAt section: Int) -> UIEdgeInsets {
        return sectionInsets
    }
    
    func collectionView(_ collectionView: UICollectionView, layout collectionViewLayout: UICollectionViewLayout, minimumLineSpacingForSectionAt section: Int) -> CGFloat {
        return sectionInsets.left
    }
    
}
