package com.WrittenTestPro;

import java.util.List;


//student interface interact with database

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;


public interface LogRepo extends JpaRepository<Log, Integer>
{
	int countByUserIdAndTestId(int userid, int testid);
	int countByUserIdAndTestIdAndVerify(int userid, int testid, int verify);
	
	List<Log> findByUserIdAndTestId(int userid, int testid);
	List<Log> findBySubmitAndVerify(int submit, int verify);
	
	@Modifying
	@Query("UPDATE Log SET question.id = NULL WHERE question.id= :questionId")
	void setQuestionIdToNull(@Param("questionId") int questionId);
}
