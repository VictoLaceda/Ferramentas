package io.github.manoelcampos.lojavirtual;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import jakarta.validation.OverridesAttribute.List;

@SpringBootApplication
public class LojaVirtualApplication {

	public static void main(String[] args) {
		SpringApplication.run(LojaVirtualApplication.class, args);
	}

	@GetMapping('/marc/{id}')
	public List <Produto>findAllByMarcaId(@PathVariable longid id){
		return repository.findAllByModeloMarcaId(id);
	}

	@GetMapping('/modelo/{id}')
	public List<Produto>findAllByPrecoIsGreaterThamAndEstoque(double preco, int estoque)

	
}
