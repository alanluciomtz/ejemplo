package net.codejava;
 
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;
 
@Controller
public class AppController {
 
    @Autowired
    private ProductService service;
     
    @RequestMapping("/")
    public String viewHomePage(Model model) {
        List<Product> listProducts = service.listAll();
        model.addAttribute("listProducts", listProducts);
       
        return "index";
    }
    
    @RequestMapping("/new")
    public String showNewProductPage(Model model) {
        Product product = new Product();
        model.addAttribute("product", product);
         
        return "new_product";
    }
    
    @RequestMapping(value = "/save", method = RequestMethod.POST)
    public String saveProduct(@ModelAttribute("product") Product product) { 
        service.save(product);
         
        return "redirect:/";
    }
    
    @RequestMapping("/edit/{id}")
    public ModelAndView showEditProductPage(@PathVariable(name = "id") int id) {
        ModelAndView mav = new ModelAndView("edit_product");
        Product product = service.get(id);
        mav.addObject("product", product);
         
        return mav;
    }
    
    @RequestMapping("/delete/{id}")
    public String deleteProduct(@PathVariable(name = "id") int id) {
        service.delete(id);
        return "redirect:/";       
    }
           
    @RequestMapping(method=RequestMethod.GET, value = "/buscarNombre")
    @ResponseBody
    public boolean buscarNombre(String nombre, Model model) throws Exception {
    	System.out.println("Entra a buscarNombre");    	
    	
    	try {
    		List<Product> listProducts = service.listAll();
            model.addAttribute("listProducts", listProducts);               
                
            for(Product producto: listProducts) {
            	if(producto.getName().equals(nombre)) {
            		System.out.println("false");
            		return false;
            	}
            }            
            System.out.println("true");
            return true;
    	}
    	catch(Exception e) {
    		System.out.println(e);
    		throw new Exception (e);    		
    	}        
    }   
    
    @RequestMapping(method=RequestMethod.GET, value = "/buscarPorMarca")
    @ResponseBody
    public List<Product> buscarPorMarca(String marca) throws Exception {
    	System.out.println("Entra a buscarPorMarca");
    	List<Product> listMarcas = null;
    	
    	try {
    		listMarcas = service.buscarPorMarca(marca);                       
    	}
    	catch(Exception e) {
    		System.out.println(e);
    		throw new Exception (e);    		
    	}
		return listMarcas;        
    }     
    
    @RequestMapping(value = "/precioMayor")
    @ResponseBody
    public List<Product> precioMayor() throws Exception {
    	System.out.println("Entra a buscarPorMarca");
    	List<Product> listPrecios = null;
    	
    	try {
    		listPrecios = service.precioMayor();                       
    	}
    	catch(Exception e) {
    		System.out.println(e);
    		throw new Exception (e);    		
    	}
    	for(Product prod: listPrecios) {
    		System.out.println("Precio: " + prod.getPrice());
    	}
		return listPrecios;        
    } 
}
