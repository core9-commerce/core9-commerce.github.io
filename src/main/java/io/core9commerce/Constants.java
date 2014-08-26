package io.core9commerce;

import java.io.File;

public enum Constants {
	ROOT_DIR(System.getProperty("user.dir")), 
	PAGE_DIR(System.getProperty("user.dir") + File.separator + "pages" ), 
	PAGE_SOURCE_DIR(System.getProperty("user.dir") + File.separator + "source-pages" );

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