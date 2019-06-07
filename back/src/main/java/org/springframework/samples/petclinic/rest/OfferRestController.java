package org.springframework.samples.petclinic.rest;

import java.util.Collection;
import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.samples.petclinic.model.Offer;
import org.springframework.samples.petclinic.service.ClinicService;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/offers")
public class OfferRestController {

	@Autowired
	private ClinicService clinicService;
	
	@RequestMapping(value = "/all", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
	public ResponseEntity<Collection<Offer>> getAllOffers(){
		Collection<Offer> offers = this.clinicService.findAllOffer();
		if(offers.isEmpty()){
			return new ResponseEntity<Collection<Offer>>(HttpStatus.NOT_FOUND);
		}
		return new ResponseEntity<Collection<Offer>>(offers, HttpStatus.OK);
	}
	
	@RequestMapping(value = "/{offerId}", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
	public ResponseEntity<Offer> getOffer(@PathVariable("offerId") int offerId){
		Offer offer = this.clinicService.findOfferById(offerId);
		if(offer == null){
			return new ResponseEntity<Offer>(HttpStatus.NOT_FOUND);
		}
		return new ResponseEntity<Offer>(offer, HttpStatus.OK);
	}
	
	@RequestMapping(value = "", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
	public ResponseEntity<Collection<Offer>> getOffersValid(){
		Collection<Offer> offers = this.clinicService.findOfferValid(new Date());
		if(offers.isEmpty()){
			return new ResponseEntity<Collection<Offer>>(HttpStatus.NOT_FOUND);
		}
		return new ResponseEntity<Collection<Offer>>(offers, HttpStatus.OK);
	}
	
	
}
