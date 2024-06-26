// SPDX-License-Identifier: MIT

pragma solidity 0.8.0;

contract ERC20 {

    mapping (address => uint256) _balances;
    mapping(address => mapping (address => uint256)) _allowance;
    uint256 immutable _totalSupply;

    uint8 constant DECIMALS = 18;

    event Transfer(address indexed _to, uint256 indexed _value);
    event Approval(address indexed _owner, address indexed _spender, uint256 _value);

    

    constructor () {
        _balances[msg.sender] = 21000000 * 10 ** DECIMALS;
        _totalSupply = _balances[msg.sender];
        
    }
    
    function name() public pure returns (string memory) {
        return "TestToken";
    }

    function symbol() public pure returns (string memory) {
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

    function transfer(address _to, uint256 _value) public returns (bool) {
        require (_balances[msg.sender] >= _value , 'Not enough funds');
        _balances[msg.sender] -= _value; 
        _balances[_to] += _value;

        emit Transfer(_to , _value);

        return true;
    }

    function transferFrom(address _from, address _to, uint256 _value) public returns (bool) {
        require (_allowance[_from][msg.sender] >= _value, 'No allowance.');
        require (_balances[_from] >= _value , 'No funds.');

        _allowance[_from][msg.sender] -= _value;
        _balances[_from] -= _value; 
        _balances[_to] += _value;

        return true;
    }

    function approve(address _spender, uint256 _value) public returns (bool) {

        _allowance[msg.sender][_spender] = _value;

        emit Approval(msg.sender, _spender, _value);
        return true;
    }

    function allowance(address _owner, address _spender) public pure returns (uint256 remaining) {
        return _allowance[_owner][_spender];
    }
}