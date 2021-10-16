//
//  Product.swift
//  erp
//
//  Created by Tuan Pham on 25/09/2021.
//

import Foundation

struct Product: Decodable {
    let id: String?
    let name: String?
    let price: Double?
    let images: [String]?
    
    init() {
        id = ""
        name = ""
        price = 0
        images = []
    }
    
    enum CodingKeys: String, CodingKey {
        case id
        case name
        case price
        case images
    }
}
