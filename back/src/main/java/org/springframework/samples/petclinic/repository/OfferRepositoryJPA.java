package org.springframework.samples.petclinic.repository;

import java.util.Date;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.samples.petclinic.model.Offer;
import org.springframework.stereotype.Repository;

@Repository // NECESARIO!!!
public interface OfferRepositoryJPA extends JpaRepository<Offer, Integer> {
	// Esto no nos sirve
	//List<Offer> findByExpireDate(LocalDate date);
	List<Offer> findByExpireDateBetween(Date start, Date end); // Esto lo comentaste en clase Cristian!!! el between
	
	// Buscamos por Id (Esto lo entiende JPA, no es necesario implementarlo)
	Offer findOfferById(Integer id);
}
