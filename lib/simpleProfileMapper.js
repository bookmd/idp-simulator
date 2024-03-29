function SimpleProfileMapper (pu) {
  if(!(this instanceof SimpleProfileMapper)) {
    return new SimpleProfileMapper(pu);
  }
  this._pu = pu;
}

SimpleProfileMapper.prototype.getClaims = function() {
  var self = this;
  var claims = {};

  SimpleProfileMapper.prototype.metadata.forEach(function(entry) {
    claims[entry.id] = entry.multiValue ?
      self._pu[entry.id].split(',') :
      self._pu[entry.id];
  });

  return claims;
};

SimpleProfileMapper.prototype.getNameIdentifier = function() {
  return { 
    nameIdentifier:                  this._pu.userName,
    nameIdentifierFormat:            this._pu.nameIdFormat,
    nameIdentifierNameQualifier:     this._pu.nameIdNameQualifier,
    nameIdentifierSPNameQualifier:   this._pu.nameIdSPNameQualifier,
    nameIdentifierSPProvidedID:      this._pu.nameIdSPProvidedID
  };
};


SimpleProfileMapper.prototype.metadata = [ {
  id: "firstName",
  optional: false,
  displayName: 'First Name',
  description: 'The given name of the user',
  multiValue: false
}, {
  id: "lastName",
  optional: false,
  displayName: 'Last Name',
  description: 'The surname of the user',
  multiValue: false
}, {
  id: "displayName",
  optional: true,
  displayName: 'Display Name',
  description: 'The display name of the user',
  multiValue: false
}, {
  id: "email",
  optional: false,
  displayName: 'E-Mail Address',
  description: 'The e-mail address of the user',
  multiValue: false
},{
  id: "mobilePhone",
  optional: true,
  displayName: 'Mobile Phone',
  description: 'The mobile phone of the user',
  multiValue: false
}, {
  id: "groups",
  optional: true,
  displayName: 'Groups',
  description: 'Group memberships of the user',
  multiValue: true
},{
  id: "ID",
  optional: true,
  displayName: 'ID',
  description: 'ID',
  multiValue: false
}];

module.exports = SimpleProfileMapper;