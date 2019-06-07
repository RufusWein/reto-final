package org.springframework.samples.petclinic.repository.springdatajpa;

import org.springframework.context.annotation.Profile;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.Repository;
import org.springframework.data.repository.query.Param;
import org.springframework.samples.petclinic.model.Offer;
import org.springframework.samples.petclinic.model.Owner;
import org.springframework.samples.petclinic.repository.OfferRepository;


@Profile("spring-data-jpa")
public interface SpringDataOfferRepository extends OfferRepository, Repository<Offer, Integer> {

	@Override
	@Query("SELECT offer FROM OFFERS offer WHERE offer.id=:id")
	public Offer findById(@Param("id") int id);
	
}
