SELECT * FROM INFORMATION_SCHEMA.PROCESSLIST
WHERE 1=1
	AND INFO IS NOT NULL
ORDER BY
	ID DESC	
;