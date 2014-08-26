package io.core9commerce;

public enum Constants {
	mode1(System.getProperty("user.dir")), mode2("Mode2"), mode3("Mode3");

	private final String name;

	private Constants(String s) {
		name = s;
	}

	public boolean equalsName(String otherName) {
		return (otherName == null) ? false : name.equals(otherName);
	}

	public String toString() {
		return name;
	}

}