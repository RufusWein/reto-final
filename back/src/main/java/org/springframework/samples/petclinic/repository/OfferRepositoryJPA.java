package org.springframework.samples.petclinic.repository;

import java.time.LocalDate;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.samples.petclinic.model.Offer;

public interface OfferRepositoryJPA extends JpaRepository<Offer, Integer> {
List<Offer> findByExpireDate(LocalDate date);
}
