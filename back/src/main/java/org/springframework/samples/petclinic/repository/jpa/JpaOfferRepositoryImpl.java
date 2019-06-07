package org.springframework.samples.petclinic.repository.jpa;

import java.sql.Date;
import java.util.Collection;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;

import org.springframework.context.annotation.Profile;
import org.springframework.dao.DataAccessException;
import org.springframework.samples.petclinic.model.Offer;
import org.springframework.samples.petclinic.repository.OfferRepository;
import org.springframework.stereotype.Repository;

@Repository
@Profile("jpa")
public class JpaOfferRepositoryImpl implements OfferRepository {
	
	@PersistenceContext
	private EntityManager em;
	
	
	@Override
	public Offer findById(int id) {
		Query query = this.em.createQuery("SELECT offer FROM OFFERS offer WHERE offer.id=:id");
	query.setParameter("id", id);
	return (Offer) query.getSingleResult();
	}
	
	@Override
	public void save(Offer offer) {
		if(offer.getId() == null) {
			this.em.persist(offer);
		}else {
			this.em.merge(offer);
		}
	}
	
	@SuppressWarnings("unchecked")
	@Override
	public Collection<Offer> findAll() throws DataAccessException{
		Query query= this.em.createQuery("SELECT offer FROM OFFERS offer");
		return query.getResultList();
	}
	
	@SuppressWarnings("unchecked")
	@Override
	public Collection<Offer>valid(Date fechaActual) throws DataAccessException{
		Query query=this.em.createQuery("SELECT offer FROM OFFERS offer WHERE fechaActual > expireDate");
		return query.getResultList();
		}
	
	@Override
	public void delete(Offer offer) throws DataAccessException{
		this.em.remove(this.em.contains(offer) ? offer : this.em.merge(offer));
	}

	

}
