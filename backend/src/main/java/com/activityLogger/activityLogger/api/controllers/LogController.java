package com.activityLogger.activityLogger.api.controllers;

import java.util.List;

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

import com.activityLogger.activityLogger.business.abstracts.LogService;
import com.activityLogger.activityLogger.entities.concretes.Log;

@RestController
@RequestMapping("/api/logs")
public class LogController {
	
	private LogService logService;
	
	@Autowired
	public LogController(LogService logService) {
		super();
		this.logService = logService;
	}
	
	@GetMapping()
	public List<Log> getAll() {
		return this.logService.getAll();
	}
	
	@GetMapping(path = "/now")
	public long getCurrentTime() {
		return this.logService.getCurrentTime();
	}
	
	@PostMapping(consumes = MediaType.APPLICATION_JSON_VALUE,
			produces = MediaType.APPLICATION_JSON_VALUE) 
	public ResponseEntity<Log> create(@RequestBody Log newLog){
		newLog.setDate(System.currentTimeMillis());
		Log log = logService.save(newLog);
		if (log == null) {
			System.out.println("server exception");
		} else {
			return new ResponseEntity<>(log, HttpStatus.CREATED);
		}
		return null;
	}
	
	@PutMapping("/{id}")
	Log replaceLog(@RequestBody Log newLog, @PathVariable Integer id) {
		return logService.findById(id)
				.map(log -> {
					log.setActivityName(newLog.getActivityName());
					log.setDate(newLog.getDate());
					return logService.save(newLog);
				})
				.orElseGet(() -> {
					newLog.setId(id);
					return logService.save(newLog);
				});
	}
	
	@DeleteMapping("/{id}")
	  void deleteLog(@PathVariable Integer id) {
	    logService.deleteById(id);
	  }
	
	@DeleteMapping()
	void deleteAll() {
		logService.deleteAll();
	}
}
