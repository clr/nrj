/* -*- mode: js2; js2-basic-offset: 2; indent-tabs-mode: nil -*- */
/**
This file is provided to you under the Apache License,
Version 2.0 (the "License"); you may not use this file
except in compliance with the License. You may obtain
a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing,
software distributed under the License is distributed on an
"AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, either express or implied. See the License for the
specific language governing permissions and limitations
under the License.
**/

var should = require('should')
var riak_json = require('../index.js')
var client = riak_json.getClient()

describe("Riak Json Client Test Suite", function() {
  it("should be a valid client with default host and port", function(done) {
    client.should.be.an.instanceOf(riak_json.RiakJsonClient)
    client.should.have.property('host')
    client.should.have.property('port')
    done()
  })
  
  it("should be able to ping the Riak Json cluster", function(done) {
    
    client.ping(function(err, response) {
      should.not.exist(err)
      response.should.equal("OK")
      done()
    })
  })
})