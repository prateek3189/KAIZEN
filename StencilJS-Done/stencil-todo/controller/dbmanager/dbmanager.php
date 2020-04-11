<?php
    /*
    * This is DB Manager
    * Created on: 01-Dec-2018
    * Modfied on: 01-Dec-2018
    * Created by: Prateek Magarde
    * Modfied bn: Prateek Magarde
    */

    class DBManager {
        protected $conn;

        function DBManager() {
            include_once("connection.php");
            $this->conn = $conn;
        }

        //insert single Record
        function insert($table, $columns, $values) {
            $sql	=	"INSERT INTO $table (";
            if(count($columns)) {
                foreach($columns as $col) {
                    $sql .=	"$col, ";
                }
            }
            $sql = rtrim($sql, ", ");
            $sql	.=	") VALUES (";
            if(count($values)) {
                foreach($values as $val) {
                    $val = mysqli_real_escape_string($this->conn, $val);
                    $sql	.=	"'$val', ";
                }
            }
            $sql = rtrim($sql, ", ");
            $sql	.=	")";
            $result = mysqli_query($this->conn, $sql);

            if(!$result) {
                return array();
            } else {
                return mysqli_insert_id($this->conn);
            }
        }

        //get single Record
        function get($select, $table, $where) {
            $sql	=	"SELECT $select
                        FROM $table
                        WHERE $where";

            $result	=	mysqli_query($this->conn, $sql);
            $row_num	=	$result ? mysqli_num_rows($result) : 0;
            if(!$result || $row_num <= 0) {
                return array();
            } else {
                $row = mysqli_fetch_object($result);
                return $row;
            }
        }

        //get all records
    	function getAll($select, $table, $where) {
    		$sql	=	"SELECT $select
    					FROM $table
    					WHERE $where";

            $result	=	mysqli_query($this->conn, $sql);
            if($result != '') {
                $row_num	=	mysqli_num_rows($result);
            }

    		if(!$result || $row_num <= 0) {
    			return array();
    		} else {
    			for($count = 0; $row = mysqli_fetch_object($result); $count ++) {
    				$arr[$count]	=	$row;
    			}
    			return $arr;
    		}
    	}

        // update a records
        function update($table, $column, $value, $where) {
            $sql = "UPDATE $table
                    SET ";
            if(count($column)) {
                for($a = 0; $a < count($column); $a ++) {
                    $val = mysqli_real_escape_string($this->conn, $value[$a]);
                    $sql .= "$column[$a] = '$val', ";
                }
            }
            $sql = rtrim($sql, ", ");
            $sql .= " WHERE $where";

            return $result	=	mysqli_query($this->conn, $sql);
        }

        // delete a records
        function delete($table, $where) {
            $sql = "DELETE FROM $table
                    WHERE $where";

            return $result	=	mysqli_query($this->conn, $sql);
        }
    }

    $db = new DBManager();
?>
