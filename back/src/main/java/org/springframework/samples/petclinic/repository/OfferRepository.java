package org.springframework.samples.petclinic.repository;

import java.util.Collection;

import org.springframework.dao.DataAccessException;

public interface OfferRepository {
	
	Collection<Oferta> findAll() throws DataAccessException;
	
	Oferta findById(int id) throws DataAccessException;
	
	void save(Oferta oferta) throws DataAccessException;
	
	void delete(Oferta oferta) throws DataAccessException;
	

}
