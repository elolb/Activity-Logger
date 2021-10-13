package com.activityLogger.activityLogger.business.abstracts;

import java.util.List;
import java.util.Optional;

import com.activityLogger.activityLogger.entities.concretes.Activity;

public interface ActivityService {
	List<Activity> getAll();
	Activity save(Activity newActivity);
	Optional<Activity> findById(Integer id);
	void deleteById(Integer id);
	void deleteAll();
}
