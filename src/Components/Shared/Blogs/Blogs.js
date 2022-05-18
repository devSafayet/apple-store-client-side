import React from 'react';

const Blogs = () => {
    return (
        <div className='container'>
            <h2 className='text-warning text-center mb-5 mt-3'>This is blogs Section</h2>
            {/* question and answer no 1 start  */}
            <div className='QA-1'>
                <h3>
                    <span className='text-danger'>Question-1: </span>
                    Difference between javascript and nodejs?
                </h3>
                <h5>
                    <span className='text-success'>Answer: </span> </h5>
                <h6>JavaScript:-</h6> <p>
                    JavaScript একটি প্রোগ্রামিং Language. এটি running in any web browser with proper browser engine.
                    <br />
                    এটি মূলত যেই কোন Client Side ব্যবহার করা হয়, Web Application এর জন্য।
                </p>
                <h6>NodeJS:-</h6>
                <p>
                    NodeJS interpreter and environment for javascript with some specific useful libraries which javascript programming van use separately. <br />
                    এটি মূলত ব্যবহার করা হয় accessing জন্য or performing any non-blocking operation of any operating system, like creating or executing shell script or accessing any hardware specific information or running any backend job.
                </p>
            </div>
            {/* question and answer no 2 start  */}
            <div className='QA-2'>
                <h3>
                    <span className='text-danger'>Question-2: </span>
                    Differences between sql and nosql databases?
                </h3>
                <h5>
                    <span className='text-success'>Answer: </span>
                </h5>
                <h6>SQL database:</h6>
                <p>
                    SQL is also pronounced as “S-Q-L” or as “See-Quel” and is primarily known to be a Relational Database. <br />
                    Use of SQL queries and syntax to analyse and get further data insights. Used for OLAP systems. <br />
                    Examples are Sqlite, MySql, Oracle, Postgres and MS-SQL.
                </p>
                <h6>NO-SQL database:</h6>
                <p>
                    NoSQL is a distributed or Non-relational Database. <br />
                    Apply different types of database technologies. <br />
                    Examples are Cassandra, MongoDB, BigTable, Redis, RavenDb, Hbase, Neo4j and CouchDb.
                </p>
            </div>
            {/* question and answer no 3 start  */}
            <div className='QA-3'>
                <h3>
                    <span className='text-danger'>Question-3: </span>
                    What is the purpose of jwt and how does it work?
                </h3>
                <h5>
                    <span className='text-success'>Answer: </span>
                </h5>
                <p> jwt means json web token . Json web token is use for user access.it is an open standard used to share security information between two parties a client and a server.Each JWT contains encoded JSON objects, including a set of claims.
                </p>
            </div>
        </div>
    );
};

export default Blogs;