//
//  ProductDetailImageViewController.swift
//  erp
//
//  Created by Tuan Pham on 25/09/2021.
//

import UIKit

class ProductDetailImageViewController: UIViewController {

    @IBOutlet weak var containerView: UIView!
    @IBOutlet weak var imageView: UIImageView!
    
    var index: Int = 0
    var imageURL: String?
    
    override func viewDidLoad() {
        super.viewDidLoad()
        containerView.layer.cornerRadius = 24
        containerView.clipsToBounds = true
        imageView.sd_setImage(with: URL(string: imageURL ?? ""), placeholderImage: nil)
    }

}
