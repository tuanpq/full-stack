//
//  ProductDetailImagesPageViewController.swift
//  erp
//
//  Created by Tuan Pham on 25/09/2021.
//

import UIKit

class ProductDetailImagesPageViewController: UIViewController {

    var images: [String]?
    
    private var pageViewController: UIPageViewController?
    private var numberOfPages: Int = 1
    private var currentlyShowingIndex = 0
    private var isInitialized: Bool = false
    
    override func viewDidLoad() {
        super.viewDidLoad()
        
        // Do any additional setup after loading the view.
        pageViewController = UIPageViewController(transitionStyle: UIPageViewController.TransitionStyle.scroll, navigationOrientation: UIPageViewController.NavigationOrientation.horizontal, options: nil)
        pageViewController!.dataSource = self
        
        numberOfPages = images?.count ?? 1
        let firstImage = self.viewControllerAtIndex(index: 0)
        let viewControllers: [ProductDetailImageViewController] = [firstImage]
        pageViewController!.setViewControllers(viewControllers, direction: UIPageViewController.NavigationDirection.forward, animated: true, completion: nil)
        
        addChild(pageViewController!)
        view.addSubview(pageViewController!.view)
        pageViewController!.didMove(toParent: self)
    }
    
    func viewControllerAtIndex(index: Int) -> ProductDetailImageViewController {
        if let productDetailImageViewController = self.storyboard?.instantiateViewController(withIdentifier: "ProductDetailImageViewController") as? ProductDetailImageViewController {
            productDetailImageViewController.index = index
            productDetailImageViewController.imageURL = images?[index]
            return productDetailImageViewController
        }
            
        return ProductDetailImageViewController()
    }
    
}

extension ProductDetailImagesPageViewController : UIPageViewControllerDataSource {
    
    func pageViewController(_ pageViewController: UIPageViewController, viewControllerBefore viewController: UIViewController) -> UIViewController? {
        if let viewController = viewController as? ProductDetailImageViewController {
            var index = viewController.index
            if index == 0 {
                return nil
            }
            index += -1
            currentlyShowingIndex = index
            
            return self.viewControllerAtIndex(index: index)
        }
        
        return nil
    }
    
    func pageViewController(_ pageViewController: UIPageViewController, viewControllerAfter viewController: UIViewController) -> UIViewController? {
        if let viewController = viewController as? ProductDetailImageViewController {
            var index = viewController.index
            index += 1
            if index == numberOfPages {
                return nil
            }
            
            currentlyShowingIndex = index
                    
            return self.viewControllerAtIndex(index: index)
        }
                
        return nil
    }

    func presentationCount(for pageViewController: UIPageViewController) -> Int {
        return numberOfPages
    }
    
    func presentationIndex(for pageViewController: UIPageViewController) -> Int {
        return currentlyShowingIndex
    }
    
}

