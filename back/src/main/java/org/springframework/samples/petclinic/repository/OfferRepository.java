package org.springframework.samples.petclinic.repository;

<<<<<<< HEAD

=======
>>>>>>> d8c73599d77cd2368c972892ea20406910e377f6
import java.util.Collection;
import java.util.Date;

import org.springframework.dao.DataAccessException;
import org.springframework.samples.petclinic.model.Offer;

public interface OfferRepository {
	
	Collection<Offer> findAll() throws DataAccessException;
	
	Offer findById(int id) throws DataAccessException;
	
	Collection<Offer>valid(Date fechaActual) throws DataAccessException;
	
	void save(Offer offer) throws DataAccessException;
	
	void delete(Offer offer) throws DataAccessException;
	

}
