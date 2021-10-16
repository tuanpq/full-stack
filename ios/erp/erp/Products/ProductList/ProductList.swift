//
//  ProductList.swift
//  erp
//
//  Created by Tuan Pham on 25/09/2021.
//

import Foundation

struct ProductList: Decodable {
    let totalElements: Int?
    let totalPages: Int?
    let pageNumber: Int?
    let products: [Product]?
    
    enum CodingKeys: String, CodingKey {
        case totalElements
        case totalPages
        case pageNumber
        case products
    }
}
