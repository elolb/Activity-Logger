package com.activityLogger.activityLogger.business.abstracts;

import java.util.List;
import java.util.Optional;

import com.activityLogger.activityLogger.entities.concretes.Log;

public interface LogService {
	List<Log> getAll();
	Log save(Log newLog);
	Optional<Log> findById(Integer id);
	void deleteById(Integer id);
	void deleteAll();
	long getCurrentTime();
}
