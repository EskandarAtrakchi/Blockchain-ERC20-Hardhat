// SPDX-License-Identifier: MIT

pragma solidity '0.8.0';

contract ERC20 {

    mapping (address => uint256) _balances;
    mapping(address mapping (address => uint256)) _allowance;
    uint256 immutable _totalSupply;

    event transfer(address indexed _to, uint256 indexed _value);
    event Approval(address indexed _owner, address indexed _spender, uint256 _value);

    uint8 constant DECIMALS = 18;

    constructor () {
        _balances[msg.sender] = 21000000 * 10 ** DECIMALS;
        _totalSupply = _balances[msg.sender];
    }
    
    function name() public pure returns (string) {
        return "TestToken";
    }

    function symbol() public pure returns (string) {
        return "TT";
    }

    function decimals() public pure returns (uint256) {
        return DECIMALS;
    }

    function totalSupply() public pure returns (uint256) {
        return _totalSupply;
    }

    function balanceOf(address _owner) public pure returns (uint256 balance) {
        return _balances[_owner];
    }

    function transfer(address _to, uint256 _value) public returns (bool success) {
        require (_balances[msg.sender] >= _value , 'Not enough funds');
        _balances[msg.sender] = _balances[msg.sender] - _value; 
        _balances[_to] = _balances[_to] + _value;

        emit transfer(_to , _value);

        return true;
    }

    function transferFrom(address _from, address _to, uint256 _value) public returns (bool success) {
        require (_allowance[_from][msg.sender] >= _value, 'No allowance.');
        require (_balances[_from] >= _value , 'No funds.');

        _allowance[_from][msg.sender] = _allowance[_from][msg.sender] - _value;
        _balances[_from] = _balances[_from] - _value; 
        _balances[_to] = _balances[_to] + _value;

        return true;
    }

    function approve(address _spender, uint256 _value) public returns (bool success) {

        _allowance[msg.sender][_spender] = _allowance[msg.sender][_spender] + _value;

        emit Approval(msg.sender, _spender, _value);
        return true;
    }

    function allowance(address _owner, address _spender) public pure returns (uint256 remaining) {
        return _allowance[_owner][_spender];
    }
}