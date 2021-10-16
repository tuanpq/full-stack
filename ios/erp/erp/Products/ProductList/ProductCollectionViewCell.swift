//
//  ProductCollectionViewCell.swift
//  erp
//
//  Created by Tuan Pham on 25/09/2021.
//

import UIKit
import SDWebImage

class ProductCollectionViewCell: UICollectionViewCell {
    
    @IBOutlet weak var productImageView: UIImageView!
    @IBOutlet weak var productNameLabel: UILabel!
    @IBOutlet weak var productPriceLabel: UILabel!
    
    required init?(coder: NSCoder) {
        super.init(coder: coder)
        
        contentView.layer.cornerRadius = 12
        contentView.layer.masksToBounds = true
    }
    
    func setContent(product: Product) {
        productImageView.sd_setImage(with: URL(string: product.images?[0] ?? ""), placeholderImage: nil)
        productNameLabel.text = product.name
        productPriceLabel.text = "\(product.price ?? 0) VNĐ"
    }
}
