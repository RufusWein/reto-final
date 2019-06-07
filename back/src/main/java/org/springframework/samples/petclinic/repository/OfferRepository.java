package org.springframework.samples.petclinic.repository;

import java.sql.Date;
import java.util.Collection;

import org.springframework.dao.DataAccessException;
import org.springframework.samples.petclinic.model.Offer;

public interface OfferRepository {
	
	Collection<Offer> findAll() throws DataAccessException;
	
	Offer findById(int id) throws DataAccessException;
	
	Collection<Offer>valid(Date fechaActual) throws DataAccessException;
	
	void save(Offer offer) throws DataAccessException;
	
	void delete(Offer offer) throws DataAccessException;
	

}
