<?php

class SomeClass
{
  /**
	 * @return int number 10
	 */
	public function doSomething()
	{
		print(10);
		return;
	}

	public function testSomething()
	{
		return true;
	}

	public function testSomethingElse()
	{
		return false;
	}
}


$obj = new SomeClass();
$obj->doSomething();
$obj->doSomething();

class NewClass extends SomeClass
{
	public function blah()
	{
		$this->doSomething();
	}
}
