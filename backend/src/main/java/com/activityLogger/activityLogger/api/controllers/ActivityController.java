package com.activityLogger.activityLogger.api.controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.activityLogger.activityLogger.business.abstracts.ActivityService;
import com.activityLogger.activityLogger.entities.concretes.Activity;

@RestController
@RequestMapping("/api/activities")
public class ActivityController {

		private ActivityService activityService;
		
		@Autowired
		public ActivityController(ActivityService activityService) {
			super();
			this.activityService = activityService;
		}
		
		@GetMapping()
		public List<Activity> getAll() {
			return this.activityService.getAll();
		}
		
		@PostMapping(consumes = MediaType.APPLICATION_JSON_VALUE,
				produces = MediaType.APPLICATION_JSON_VALUE) 
		public ResponseEntity<Activity> create(@RequestBody Activity newActivity){
			Activity activity = activityService.save(newActivity);
			if (activity == null) {
				System.out.println("server exception");
			} else {
				return new ResponseEntity<>(activity, HttpStatus.CREATED);
			}
			return null;
		}
		
		@DeleteMapping("/{id}")
		  Optional<Activity> deleteActivity(@PathVariable Integer id) {
			 Optional<Activity> activityToDelete = activityService.findById(id);
			activityService.deleteById(id);
			return activityToDelete;
		  }
		
		@DeleteMapping()
		void deleteAll() {
			activityService.deleteAll();
		}
}
